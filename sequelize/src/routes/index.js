const todosController = require('../controllers').todos
const todoItemsController = require('../controllers').todoItems

module.exports = (app) => {
  
  // todos routes
  app.post('/api/todos/create', todosController.create)
  app.get('/api/todos/list', todosController.list)
  app.get('/api/todos/:todoId', todosController.retrieve)
  app.put('/api/todos/update/:todoId', todosController.update)

  // todo items routes
  app.post('/api/todos/create/:todoId/items', todoItemsController.create)
}