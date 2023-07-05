import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
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
      {/* <nav className='nav-app'>
        <ul>
          <li>
            <Link to="/navbar">Navbar test</Link>
          </li>
        </ul>
      </nav> */}


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


      <nav className='nav-icon'>
        <button>
          <Link to="/shop">
            <svg width="30px" height="30px">
              <image href={shop} width="30px" height="30px" />
            </svg>
          </Link>
        </button>
        <button>
          <Link to="/cart">
            <svg width="30px" height="30px">
              <image href={cart} width="30px" height="30px" />
            </svg>
          </Link>
        </button>
        <button>
          <Link to="/favorite">
            <svg width="30px" height="30px">
              <image href={heart} width="30px" height="30px" />
            </svg>
          </Link>
        </button>
        <button>
          <Link to="/setting">
            <svg width="30px" height="30px">
              <image href={gear} width="30px" height="30px" />
            </svg>
          </Link>
        </button>
        <button>
          <Link to="/notification">
            <svg width="30px" height="30px">
              <image href={bell} width="30px" height="30px" />
            </svg>
          </Link>
        </button>
      </nav>

    </Router>
  )
}

export default App
