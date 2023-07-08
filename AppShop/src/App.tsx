import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import shop from './assets/shop-solid.svg'
import cart from './assets/cart-shopping-solid.svg'
import heart from './assets/heart-solid.svg'
import gear from './assets/gear-solid.svg'
import bell from './assets/bell-solid.svg'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Favorite from './components/Favorite'
import Setting from './components/Setting'
import Notification from './components/Notification'



function App() {

  return (


    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>


      <nav className="nav-icon">
        <NavLink to="/shop" activeClassName="active">
          <svg width="50px" height="50px">
            <image href={shop} width="50px" height="50px" />
          </svg>
        </NavLink>
        <NavLink to="/cart" activeClassName ="active">
          <svg width="50px" height="50px">
            <image href={cart} width="50px" height="50px" />
          </svg>
        </NavLink>
        <NavLink to="/favorite" activeClassName="active">
          <svg width="50px" height="50px">
            <image href={heart} width="50px" height="50px" />
          </svg>
        </NavLink>
        <NavLink to="/setting" activeClassName="active">
          <svg width="50px" height="50px">
            <image href={gear} width="50px" height="50px" />
          </svg>
        </NavLink>
        <NavLink to="/notification" activeClassName="active">
          <svg width="50px" height="50px">
            <image href={bell} width="50px" height="50px" />
          </svg>
        </NavLink>
      </nav>


    </Router>
  )
}

export default App
