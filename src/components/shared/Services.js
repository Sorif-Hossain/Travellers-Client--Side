import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Services() {
    const [services, setServices] = useState([])
    useEffect(()=>{
        axios('https://whispering-forest-14145.herokuapp.com/services')
        .then(res => setServices(res.data))
    },[])
    return (
        <div className='container text-center custom-margin'>
        <h1 className='my-5 fw-bold text-custom p-2 bg-light border"'>TRAVELLER. Offers best travel destination and cheep Price</h1>
        <div className='row row-cols-lg-3 g-3'>
          {
            services.map(service => (
              <article key={service._id}>
                  <div className="card h-100 shadow rounded-3" >
                <img src={service.image} className="card-img-top" alt="service-img"/>
                <div className="card-body">
                <h3 className="card-title my-3 text-custom">{service.name}</h3>
                <p className="card-text mb-3">{service.description}</p>
                <p className='fw-bold'>Booking start from : ${service.price}</p>
                <Link to={`/booking/${service._id}`} className='text-decoration-none fw-bold'>
                  <button className ='btn btn-success fw-bold text-custom'>Book Now</button>
                </Link>
                </div>
              </div>
              </article>
            ))
          }
        </div>
      </div>
    )
}

export default Services;
