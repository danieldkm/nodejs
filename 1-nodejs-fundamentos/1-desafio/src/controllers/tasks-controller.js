import { randomUUID } from 'node:crypto'
import { Database } from '../database.js'
import { 
  createTasks,
  updateTasks,
  findAllBySearch,
  deleteTasks,
  completeTasks,
} from '../services/tasks-service.js'

const database = new Database()

export const create = (req, res) => {
  try {
    createTasks(req.body?.title, req.body?.description)
  } catch (error) {
    return res.writeHead(400).end(JSON.stringify({
      message: error.message
    }))
  }

  return res.writeHead(201).end()
}

export const show = (req, res) => {
  const { search } = req.query

  const tasks = findAllBySearch(search)

  return res.end(JSON.stringify(tasks))
}

export const update = (req, res) => {
  const { id } = req.params

  try {
    updateTasks(id, req.body?.title, req.body?.description)
  } catch (error) {
    return res.writeHead(400).end(JSON.stringify({
      message: error.message
    }))
  }
  
  return res.writeHead(204).end()
}

export const remove = (req, res) => {
  const { id } = req.params

  try {
    deleteTasks(id)
  } catch (error) {
    return res.writeHead(400).end({
      message: error.message,
    })
  }
  return res.writeHead(204).end()
}

export const complete = (req, res) => {
  const { id } = req.params

  try {
    completeTasks(id)
  } catch (error) {
    return res.writeHead(400).end({
      message: error.message,
    })
  }
  
  return res.writeHead(204).end()
}