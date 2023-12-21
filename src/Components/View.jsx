import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseurl } from '../baseurl';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import {
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slice/wishlist';
import { addToCart } from '../redux/slice/cart';
import { MDBInput } from 'mdb-react-ui-kit';
function View() {

  const [detail,setDetail]=useState([])
    const {id}=useParams()
  console.log(id);

  const dispatch=useDispatch()

  const fetchDetails=async()=>{
    const {data}=await axios.get(`${baseurl}/${id}`)
    console.log(data);
    setDetail(data)
  }
   console.log(detail);
  useEffect(()=>{
    fetchDetails()
  },[])


  return (
    <div className='container' >
       <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={detail.thumbnail} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontWeight: 'bolder'}}>{detail.title}</MDBCardTitle>
        <MDBCardText>
         {detail.description}
       
     
      <MDBListGroup flush>
      <MDBCardHeader style={{fontWeight: 'bolder'}}>Brand : {detail.brand}</MDBCardHeader>
        <MDBListGroupItem style={{fontWeight: 'bolder'}}>Price : ${detail.price}</MDBListGroupItem>
        <MDBListGroupItem style={{fontWeight: 'bolder'}}>Discount : {detail.discountPercentage}% off</MDBListGroupItem>
        <MDBListGroupItem style={{fontWeight: 'bolder'}}>Category : {detail.category}</MDBListGroupItem>
      </MDBListGroup>
   
        </MDBCardText>
        <div className='d-flex justify-content-between '>
        <MDBBtn  onClick={()=>dispatch(addToWishList(detail))} >Add to Wishlist</MDBBtn>
        <MDBBtn className='btn btn-success '  onClick={()=>dispatch(addToCart(detail))} >Add to cart</MDBBtn>
        </div>
        
      </MDBCardBody>
    </MDBCard>
   
      
    

    </div>
  )
}

export default View