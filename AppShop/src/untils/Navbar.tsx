
import { Route, Routes, Link } from 'react-router-dom';
import Counter from '../components/Counter';
import Todo from '../components/Todo';



const Navbar = () => {
    return (

        <div className='nav-header'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/counter">Counter Reducer</Link>
                        </li>
                        <li>
                            <Link to="/todo">Todo</Link>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
        </div>
    )
}

export default Navbar