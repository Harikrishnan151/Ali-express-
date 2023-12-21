import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Wishlist.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { deleteFromWishList } from '../redux/slice/wishlist';
import { addToCart } from '../redux/slice/cart';

function Wishlist() {

  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
const dispatch=useDispatch()

const handleWishlistToCart=(item)=>{
  dispatch(addToCart(item))
  alert('Item added to cart')
  dispatch(deleteFromWishList(item.id))
}


  return (
    <div id='card' className='container'>
       {
      wishlistArray.length>0?wishlistArray.map((item)=>(
          <MDBCard className='card' style={{width:'18rem'}}>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage style={{height:'13rem',width:'18rem'}} src={item.thumbnail} fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <div className='d-flex justify-content-between '>
        <MDBBtn onClick={()=>dispatch(deleteFromWishList(item.id))}  color='danger' ><i  className='fa-solid fa-trash '></i></MDBBtn>
        <MDBBtn onClick={()=>handleWishlistToCart(item)} ><i className='fa-solid fa-cart-plus text-green '></i></MDBBtn>
        </div>
          </MDBCardBody>
        </MDBCard>
        )):
        <div className='container'>
          
            
            <img  style={{ height: '21rem', paddingLeft:'310px'}} src="https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif" alt="" />
        <h1 className='text-center'>Your wishlist is empty</h1>
        <Link to={'/'}>
          <div style={{marginLeft:'500px'}}>
          <button  className='btn btn-primary m-4 align-content-center '>Back</button>
          </div>
        
        </Link>
           
         
        
      </div>
       }
    </div>
  )
}

export default Wishlist