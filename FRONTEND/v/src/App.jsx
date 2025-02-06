import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Otp from './Components/Otp'
import Register from './Components/Register'
import Login from './Components/Login'
import Logut from './Components/Logout'
import Cart from './Components/Cart'
import Placeorder from './Components/Placeorder'

import Footer from './Components/Footer'
import Userprofile from './Components/Userprofile'



function App() {
  return (
    <div>



<BrowserRouter>
<Nav></Nav>

<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='verify-otp' element={<Otp/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/logout' element={<Logut/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/place' element={<Placeorder/>}></Route>
<Route path='/userprofile' element={<Userprofile/>}></Route>
</Routes>
<Footer></Footer>

</BrowserRouter>

    </div>
  )
}

export default App