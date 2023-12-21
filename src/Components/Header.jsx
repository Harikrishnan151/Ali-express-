import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import './Header.css'
  import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {

  const wishlist=useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);

  const cartArray=useSelector((state)=>state.cartReducer)
  // console.log(cartArray);
  return (
    <div>
     <MDBNavbar light className='navbar'>
        <MDBContainer>
          <Link to={'/'}>
          
          <MDBNavbarBrand href='#'>
            <span style={{color:'white'}}>Ali Express</span>
            <img
              src='https://i.pinimg.com/564x/04/38/11/04381104d75831ebbf960402d4f6dd5b.jpg'
              height='50'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          </Link>
          <form className='d-flex input-group w-auto'>
            <Link to={'/wishlist'}>
          <div>
          <i class="fa-solid fa-heart fa-xl m-2 text-danger" ></i>
          <MDBBadge color='danger' light pill className='position-absolute translate-middle'>
          {wishlist.length}
          <span class="visually-hidden">unread messages</span>
        </MDBBadge>
          </div>
          </Link>
          <Link to={'/cart'}>
          <div className='mx-5'>
          <i class="fa-solid fa-cart-shopping fa-xl m-2"></i>
          <MDBBadge color='danger' light pill className='position-absolute translate-middle'>
         {cartArray.length}
          <span class="visually-hidden">unread messages</span>
        </MDBBadge>
          </div>
          </Link>
          <div>
          <i class="fa-solid fa-user fa-xl text-light"></i>
          </div>
            
          </form>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header