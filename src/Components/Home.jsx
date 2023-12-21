import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import { baseurl } from '../baseurl'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';



function Home() {

    const [products,setProducts]=useState([])

    const fetchData=async()=>{
        const {data}=await axios.get(baseurl)
        console.log(data.products);
        setProducts(data.products)
    }
    console.log(products);
    useEffect(()=>{
        fetchData()
    },[])
   
    const [filter,setFilter]=useState('')

    const searchText=(event)=>{
       setFilter(event.target.value)
    }

    let dataSearch=products.filter(item=>{
      return Object.keys(item).some(key=>item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })
    
  return (
    <div className='card'>
      <div className='container-fluid mt-0 pt-0'>
      <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img style={{height:'35rem'}} src='https://cdn.flipshope.com/blog/wp-content/uploads/2021/10/Aliexpress-Black-Friday-Sale-1.png' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img style={{height:'35rem'}} src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/11/aliexpress-black-friday-2539863.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img style={{height:'35rem'}} src='https://www.topfdeals.com/wp-content/uploads/2022/08/2503bb7fdd32f75081947c9d6a777362_fgraphic.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    
      </div>
         
      <MDBInputGroup   tag="form" className=' my-4'>
              <input value={filter} onChange={searchText.bind(this)} className='form-control' placeholder="Search Products" aria-label="Search" type='Search' />
              <MDBBtn outline>Search</MDBBtn>
            </MDBInputGroup>
        
      
      
   
      {
        dataSearch.map((item)=>(
          <MDBCard className='card' style={{width:'18rem'}}>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={item.thumbnail} style={{height:'13rem',width:'18rem'}} fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle style={{fontWeight: 'bolder'}}>{item.title}</MDBCardTitle>
            <MDBCardText>
              {item.description}
            </MDBCardText>
            <Link to={`/view/${item.id}`}>
            <MDBBtn >View</MDBBtn>
            </Link>
            
          </MDBCardBody>
        </MDBCard>
        ))
      }
    </div>
  )
}

export default Home