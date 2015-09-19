export function list() {
  return {
    types: ['LIST', 'LIST_SUCCESS', 'LIST_FAIL'],
    promise: (client) =>
      client.get('/todos')
  };
}

export function add(todo) {
  return {
    types: ['ADD', 'ADD_SUCCESS', 'ADD_FAIL'],
    todo,
    promise: (client) =>
      client.post('/todos', {data: todo})
  };
}
