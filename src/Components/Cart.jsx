import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { deleteFromCart, emptyCart } from '../redux/slice/cart';
function Cart() {
  const [total,setTotal]=useState()
  const cart=useSelector((state)=>state.cartReducer)
  console.log(cart);
  const navigate=useNavigate()

  const dispatch=useDispatch()

  const getCartTotal=()=>{
    if(cart.length>0){
    setTotal(cart.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  console.log(total);

  const handleCheckout=()=>{
    dispatch(emptyCart())
    alert("Order placed Succesfully")
    navigate('/')

  }
  useEffect(()=>{
    getCartTotal()
  },[cart])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
        {
        cart.length > 0 ? 
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product Name</th>
                <th scope='col'>Image</th>
                <th scope='col'>Price</th>
                <th scope='col'>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <th scope='row'>{index+1}</th>
                  <td>{item.title}</td>
                  <td><img style={{width:'100px',height:'90px'}} src={item.thumbnail} alt="" /></td>
                  <td>$ {item.price}</td>
                  <td  ><i onClick={()=>dispatch(deleteFromCart(item.id))} className="fa-solid fa-trash text-danger"></i></td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        :
        <div className='text-center'>
          <img style={{ height: '26rem' }} src="https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif" alt="" />
          <h1 className='m-2'>Your Cart is Empty</h1>
          <Link to={'/'}>
            <button className='btn btn-primary m-4'>Back to Home</button>
          </Link>
        </div>
      }

        </div>
        <div className="col-6">
        <h1 className='text-center m-4'>Cart Summary</h1>
        <h3>Total Number of products : {cart.length} </h3>
        <h2>Total : $ {total} </h2>
        <div className='text-center m-4'>
    <button onClick={handleCheckout}  className='btn btn-success'>Check Out</button>
    </div>
          
          
        </div>
      </div>


    </div>
  )
}

export default Cart