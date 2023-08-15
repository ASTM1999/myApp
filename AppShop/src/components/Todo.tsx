import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { addTodo, removeTodo, renameTodo } from '../redux/reducers/todoReducers'
// import { useEffect } from "react";



interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
const Todo = () => {
    const todos: Todo[] = useSelector((state: RootState) => state.todos.todos)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const storedTodos = localStorage.getItem('todos')
    //     if(storedTodos) {
    //         dispatch(addTodo(JSON.parse(storedTodos)))
    //     }
    // }, [dispatch])

    const handleAddTodo = () => {
        const text = prompt('Enter a new todo')
        if (text) {
            // console.log("test")
            dispatch(addTodo(text))
        }
    }

    const handleRemoveTodo = (id: number) => {

        console.log("id: ", id)
        dispatch(removeTodo(id))
    }

    const handleRenameTodo = (id: number) => {
        const newText = prompt('Enter a new name for to todo:')
        if (newText) {
            dispatch(renameTodo({ id, text: newText }))
        }
    }

    return (
        <div className="Todo">
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} {''}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        <button onClick={() => handleRenameTodo(todo.id)}>Rename</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo