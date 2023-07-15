
import React,{Fragment} from 'react'
import carImg1 from '../../assets/car-1.jpg'
import carImg2 from '../../assets/car-2.jpg'
import carImg3 from '../../assets/car-3.jpg'

function WebHeadingExtend() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" style={{ marginTop: '5rem',backgroundColor:'pink', zIndex:'0' }} data-ride="carousel" data-interval="4000">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img  style={{height:'22rem'}}className="d-block w-100"  src={carImg1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img style={{height:'22rem'}} className="d-block w-100" src={carImg2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img style={{height:'22rem'}} className="d-block w-100" src={carImg3} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}


export default WebHeadingExtend