import { create } from "zustand";

const useTodoStore = create(set => ({
    // state variable
    todos: [],   // array of objects having keys as id & todo

    // reducers
    add: (id, todo) => set(state => ({
        todos: [...state.todos, {id,todo}]
    })),
    edit: (id, newTodo) => set(state => ({
        todos: state.todos.map(todo => {
            if (todo.id === id)
                return {id, newTodo}
            return todo
        })
    })),
    delete: (id) => set(state => ({
        todos: state.todos.filter(todo => (
            todo.id !== id
        ))
    }))
}))

export default useTodoStore