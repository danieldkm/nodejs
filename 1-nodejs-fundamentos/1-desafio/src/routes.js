import { buildRoutePath } from './utils/build-route-path.js'
import { 
  create,
  show,
  update,
  remove,
  complete,
} from './controllers/tasks-controller.js'

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: create,
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: show,
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: update,
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: remove,
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: complete,
  },
]