import Todo from "../../components/Todo";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const RENAME_TODO = "RENAME_TODO";
export const UPDATE_TODO = "UPDATE_TODO";


export const addTodo = (text: string) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export const removeTodo = (id: number) => {
    return {
        type: REMOVE_TODO,
        payload: id,
    }
}

export const renameTodo = (id: number, text: string) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id,
            text
        }
    }
}
export const updateTodos = (todos: Todo[]) => {
    return {
        type: UPDATE_TODO,
        payload: todos,
    }
}