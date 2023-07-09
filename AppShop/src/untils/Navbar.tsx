
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from '../components/Counter';



const Navbar = () => {
    return (

        <div className='nav-header'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/counter">Counter Reducer</Link>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/counter" element={<Counter />} />
                </Routes>
        </div>
    )
}

export default Navbar