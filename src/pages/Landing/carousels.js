import React from 'react'
import { Link } from 'react-router-dom';
import './carousels.css'


const Carousels = () => {
  return (
    <div id="home-carousels">
        <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li id="carousel__slide1"
                  
                  className="carousel__slide" style={{ backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Join us as Driver</h1>
                        <p>Login to experience a new world of confidence and independence.</p>
                        <Link to="/login"><button className="car-btn" type='button'> Login</button></Link>
                    </div>
                </div>
                  <a href="#carousel__slide4"
                     className="carousel__prev">Go to last slide</a>
                  <a href="#carousel__slide2"
                     className="carousel__next">Go to next slide</a>
                
                
              </li>
              <li id="carousel__slide2"
                  
                  className="carousel__slide" style={{  backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Register Now</h1>
                        <p>Look upon ways of safe travel with WWM.</p>
                        <Link to="/login"><button className="car-btn" type='button'>Login</button></Link>
                    </div>
                </div>
                <a href="#carousel__slide1"
                   className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide3"
                   className="carousel__next">Go to next slide</a>
              </li>
              <li id="carousel__slide3"
                  
                  className="carousel__slide" style={{  backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Find my walkmate</h1>
                        <p>Join our Walkbuddy to get in contact with a walkmate and make new friends on way.</p>
                        <Link to="/login"><button className="car-btn" type='button'>Know More</button></Link>
                    </div>
                </div>
                <a href="#carousel__slide2"
                   className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide4"
                   className="carousel__next">Go to next slide</a>
              </li>
              <li id="carousel__slide4"
                  
                  className="carousel__slide" style={{  backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Track my Girl</h1>
                        <p>Track the location of your loved ones easily!</p>
                        <Link to="/login"><button className="car-btn" type='button'>Know More</button></Link>
                    </div>
                </div>
                <a href="#carousel__slide3"
                   className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide1"
                   className="carousel__next">Go to first slide</a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                  <a href="#carousel__slide1"
                     className="carousel__navigation-button">Go to slide 1</a>
                </li>
                <li className="carousel__navigation-item">
                  <a href="#carousel__slide2"
                     className="carousel__navigation-button">Go to slide 2</a>
                </li>
                <li className="carousel__navigation-item">
                  <a href="#carousel__slide3"
                     className="carousel__navigation-button">Go to slide 3</a>
                </li>
                <li className="carousel__navigation-item">
                  <a href="#carousel__slide4"
                     className="carousel__navigation-button">Go to slide 4</a>
                </li>
              </ol>
            </aside>
          </section>
          </div>
  )
}

export default Carousels
