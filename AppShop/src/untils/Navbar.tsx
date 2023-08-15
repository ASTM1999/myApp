
import { Route, Routes, Link } from 'react-router-dom';
import Counter from '../components/Counter';
import Todo from '../components/Todo';
import './navbar.css'


const Navbar = () => {
    return (

        <div className='nav-header'>
                <nav>
                    <ul>
                        <a>
                            <Link to="/counter">Counter Reducer</Link>
                        </a>
                        <a>
                            <Link to="/todo">Todo</Link>
                        </a>
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