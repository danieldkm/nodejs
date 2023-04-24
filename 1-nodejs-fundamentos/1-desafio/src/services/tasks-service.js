import { randomUUID } from 'node:crypto'
import { Database } from '../database.js'

const database = new Database()

const getTask = (id) => {
  const task = database.findbyId('tasks',id);
  if (!task) {
    throw new Error('Task não encontrado')
  }

}
export const createTasks = (title, description) => {
  if (!title) {
    throw new Error('Informe um título')
  }

  if (!description) {
    throw new Error('Informe a descrição')
  }

  const task = {
    id: randomUUID(),
    title,
    description,
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date(),
  }

  database.insert('tasks', task)
}

export const updateTasks = (id, title, description) => {
  const task = getTask(id)

  if (!title && !description) {
    throw new Error('Para atualizar informe ao menos um título ou descrição!')
  }

  if (title) {
    task.title = title;
  }

  if (description) {
    task.description = description;
  }
  
  database.update('tasks', id, {
    ...task,
    updated_at: new Date()
  })
}

export const findAllBySearch = (search) => {
  return database.select('tasks', search ? {
    title: search,
    description: search
  } : null)
}

export const deleteTasks = (id) => {
  const task = getTask(id)

  database.delete('tasks', id)
}

export const completeTasks = (id) => {
  const task = getTask(id)

  database.update('tasks', id, {
    ...task,
    updated_at: new Date(),
    completed_at: task.completed_at ? null : new Date(),
  })
}