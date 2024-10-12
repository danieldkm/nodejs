import { DatabaseSync } from 'node:sqlite'
import sqlBricks from 'sql-bricks'

// banco em memoria
// const databse = new DatabaseSync(':memory:')
const database = new DatabaseSync('./db.sqlite')
function runSeed(items) {
  database.exec(`
    DROP TABLE IF EXISTS students
  `)

  database.exec(`
    CREATE TABLE students(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL
    ) STRICT
  `)

  insert({
    table: 'students',
    items,
  })

  const all = select(
    sqlBricks
      .select('name, phone')
      .orderBy('name')
      .from('students')
      .toString()
  )
  console.log(all)
}

export function select(query) {
  return database.prepare(query).all()
}

export function insert({table, items}) {
  const {text, values } = sqlBricks.insertInto(table, items)
  .toParams({ placeholder: '?'})

  const insertStatement = database.prepare(text)
  insertStatement.run(...values)
}

runSeed([{
  name: 'name 1',
  phone: '11223344',
},{
  name: 'name 4',
  phone: '11223344',
},{
  name: 'name 2',
  phone: '11223344',
},{
  name: 'name 3',
  phone: '11223344',
}])