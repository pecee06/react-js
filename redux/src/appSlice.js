import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates a unique ID

export const appSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                task: action.payload    // payload takes that value which is passed while calling this method
            };
            state.todos.push(todo); // state represent previous state of our store
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id != action.payload);
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.id)
                    return {...todo, task:action.payload.task}
                return todo;
            });
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = appSlice.actions;

export default appSlice.reducer;