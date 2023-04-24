
import { parse } from 'csv-parse'
import fs from 'node:fs/promises'
import { Readable, Writable, Transform } from 'node:stream'

const importTaskPath = new URL('tasks.csv', import.meta.url)

async function fetchTask(task) {
  return fetch('http://localhost:3333/tasks', {
    method: 'post',
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  });
}

(async () => {
  let parser;
  await fs.readFile(importTaskPath, 'utf8')
    .then(data => {
      parser = parse(data);
    })
    .catch((e) => {
      console.error(e)
    })
  process.stdout.write('start\n');
  for await (const [title, description] of parser) {
    if (title !== 'title' && description !== 'description') {
      console.log({
        title, description
      })
      await fetchTask({
        title,
        description,
      })
    }
  }
  process.stdout.write('...done\n');
})();