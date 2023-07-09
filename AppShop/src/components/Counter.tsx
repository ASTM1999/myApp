import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counterReducer'
import { RootState } from '../redux/reducers/rootReducer'



const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment(1));
    }

    const handleDecrement = () => {
        dispatch(decrement(1))
    }
    return (
        <div className='counter'>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button> 
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )

}
export default Counter