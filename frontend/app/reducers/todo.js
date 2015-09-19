export default function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD': return {
      ...state,
      isLoading: true
    };
    case 'ADD_SUCCESS': return {
      ...state,
      todos: [...state.todos, action.todo],
      isLoading: false
    };
    case 'ADD_FAIL': return {
      ...state,
      error: action.error,
      isLoading: false
    };
    case 'LIST': return {
      ...state,
      isLoading: true
    };
    case 'LIST_SUCCESS': return {
      ...state,
      todos: action.result,
      isLoading: false
    };
    case 'LIST_FAIL': return {
      ...state,
      error: action.error,
      isLoading: false
    };
    default: return state;
  }
}
