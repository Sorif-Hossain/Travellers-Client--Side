import { Link } from 'react-router-dom';
import image from '../../media/images/header.png'
import Blog from '../extra/Blog';
import Vision from '../extra/Vision';
import Services from './Services';
function Home() {
  const style ={
        color: 'Indigo'
      }
    return (
        <>
          <div className="container d-lg-flex">
          <div className="mt-5 custom-width">
            
            <h1 className="fw-bold display-5 mt-2" style={style}>
              Travel More To <br />Discover Yourself
            </h1>
            <p className='mt-3 lh-lg pe-lg-4'>TRAVELLER, the world's largest travel guidance platform, helps hundreds of millions of people each month become better travelers, from planning to booking to taking a trip. Travelers across the globe use the TRAVELLER site and app to discover where to stay, what to do and where to eat based on guidance from those who have been there before.</p>
            <Link to ='/about'>
              <button className="btn bg-success mt-4 py-2 px-4 rounded-pill fw-bold text-white">ABOUT US</button>
            </Link>
          </div>
          <div className="ms-3 custom-width">
            <img src={image} className='img-fluid mt-5' alt="" />
          </div>
        </div>
        <Services/>
        <Vision/>
        <Blog/>
      </>
    )
}

export default Home
