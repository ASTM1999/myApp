import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: state.todos.length + 1,
                text: action.payload,
                completed: false,
            }
            console.log('test push')
            state.todos.push(newTodo)
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        renameTodo: (
            state,
            action: PayloadAction<{ id: number; text: string }>
        ) => {
            const { id, text } = action.payload;
            const todoToRename = state.todos.find((todo) => todo.id === id)
            if (todoToRename) {
                todoToRename.text = text
            }
        }
    }
})

export const { addTodo, removeTodo, renameTodo } = todoSlice.actions
export default todoSlice.reducer