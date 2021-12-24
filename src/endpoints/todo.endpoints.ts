const BASE_PATH: string = 'todos';

interface TodoEndpoints {
    getTodos: string
}

const todosEndpoints: TodoEndpoints = {
    getTodos: `${BASE_PATH}`,
}

export {todosEndpoints};
