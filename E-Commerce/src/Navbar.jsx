import React, { useState } from 'react'
import '../src/NavbarStyle.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = ({ setData, cart }) => {
   const location = useLocation()
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("")

   const filterByCategory = (category) => {
      const element = items.filter((product) => product.category === category)
      setData(element)
   }
   const filterByPrice = (price) => {
      const element = items.filter((product) => product.price >= price)
      setData(element)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search/${searchTerm}`)
      setSearchTerm("")
   }


   return (
      <>
         <header className='Navbar-Main-Container'>
            <div className="navbar-container">
               <Link to={'/'} className="brand">E-Commerce</Link>
               <form
                  onSubmit={handleSubmit}
                  className="search-bar">
                  <input
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     type="text"
                     placeholder='Search Products'
                  />
               </form>
               <Link to={'/cart'} className="cart">
                  <button type="button" className="btn btn-primary position-relative">
                     <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                        <span className="visually-hidden">unread messages</span>
                     </span>
                  </button>
               </Link>
            </div>
            {
               location.pathname == '/' && (
                  <div className="nav-bar-wrapper">
                     <div className="items">All Products</div>
                     <div
                        onClick={() => setData(items)}
                        className="items">Grocery</div>
                     <div
                        onClick={() => filterByCategory('mobiles')}
                        className="items">Mobiles</div>
                     <div
                        onClick={() => filterByCategory('laptops')}

                        className="items">Laptops</div>
                     <div
                        onClick={() => filterByCategory('tablets')}

                        className="items">Tablets</div>
                     <div
                        onClick={() => filterByPrice(29999)}
                        className="items">Fashion</div>
                     <div
                        onClick={() => filterByPrice(49999)}
                        className="items">Electronics</div>
                     <div
                        onClick={() => filterByPrice(69999)}
                        className="items">Kids</div>
                     <div
                        onClick={() => filterByPrice(89999)}
                        className="items">BeautyProducts</div>

                  </div>
               )
            }
         </header>
      </>
   )
}

export default Navbar