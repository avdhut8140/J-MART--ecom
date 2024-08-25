
import './App.css'

import Landingpage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import BooksPage from './pages/BooksPages'
import Footer from './components/Footer'
import MensPage from './pages/MensPage'
import AcPage from './pages/AcPage'
import WomensPage from './pages/WomansPage'
import ComputersPage from './pages/ComputersPage'
import GroceriesPage from './pages/GroceriesPage'
import MobilesPage from './pages/MobilesPage'
import TvPage from './pages/TvPage'
import WatchesPage from './pages/WatchesPage'

import Navbar from './components/Navbar'
import Catagorybar from './components/Catagorybar'
import { Provider } from 'react-redux'
import store from './store'
import SingleProductPage from './pages/single_product_page'
import CartPage from './pages/cart_page'
import SearchingPage from './pages/search_page'
import HomePage from './pages/HomePage'


function App() {
  return <>

  <Provider store = {store}>
  {/* <BrowserRouter> */}
  <Routes>
    <Route path='/' element = {<Landingpage/>} />
    
    <Route path='/login' element = { <Login/>} />
    <Route path='/signup' element = {<SignUp/>}/>
    <Route path='/bookspage' element = { <BooksPage/>} />
    <Route path='/menspage' element = { <MensPage/>} />
    <Route path='/acpage' element = { <AcPage/>} />
    <Route path='/womenspage' element = { <WomensPage/>} />
    <Route path='/computerspage' element = { <ComputersPage/>} />
    <Route path='/groceriespage' element = { <GroceriesPage/>} />
    <Route path='/mobilespage' element = { <MobilesPage/>} />
    <Route path='/tvpage' element = { <TvPage/>} />
    <Route path='/watchespage' element = { <WatchesPage/> } />
    <Route path='/cartpage' element = { <CartPage/>} />
    <Route path='/search' element = { <Landingpage/>} />
    <Route path='/search/:query' element = { <SearchingPage/>} />

    <Route path='/product/:id' element = {<SingleProductPage/>} />

    <Route path='/home' element = { <HomePage/>} >
        <Route path='bookpage' element = { <BooksPage/>} />
        <Route path='menpage' element = { <MensPage/>} />
        <Route path='acspage' element = { <AcPage/>} />
        <Route path='womenpage' element = { <WomensPage/>} />
        <Route path='computerpage' element = { <ComputersPage/>} />
        <Route path='groceriepage' element = { <GroceriesPage/>} />
        <Route path='mobilepage' element = { <MobilesPage/>} />
        <Route path='tvspage' element = { <TvPage/>} />
        <Route path='watchepage' element = { <WatchesPage/> } />
        <Route path='cartspage' element = { <CartPage/>} />
        <Route path='searches' element = { <Landingpage/>} />
        <Route path='searches/:query' element = { <SearchingPage/>} />

        <Route path='products/:id' element = {<SingleProductPage/>} />

    
  
    </Route>
    
    
    <Route path='*' element = {<>page not found</>} />
  </Routes>
  {/* </BrowserRouter>  */}
  <Footer/>
  
  </Provider>


  </>
  
}

export default App
