import React from 'react'
import './content.css'
import logo from './Images/logo.png'


const Content = () => {
  return (
    <div className='about'>
      <div className="vision">
        <div className="vision-img">
          <img src={logo} alt="" />
        {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8cba9b30761023.5639f18980df1.jpg" alt="" /> */}
        </div>
        <div className="viscontent">
        <h1>Our Vision</h1>
      <p>We at WWM- Walk With ME believe in a safe and secure and sustainable public environment for the women around us.
        We aim in providing an open platform for the strong women of society to earn and travel with freedom in absence of any sense of insecurity.
         
      </p>
      </div>
      </div>
      <div className="work">
      <h1>What we do? </h1>
      <div className="workcontent">
       
      <p>WWM is a platform focussed on security aspect of women in society. It is well described as for the Ladies, by the Ladies and of the Ladies. We provide a platform for women drivers to earn a respectable living and at the same time, a safe journey for the ordinary women.
        Our services also unite unacquainted beautiful ladies at a common route to walk with a sense of security. You can join us to book an electric ride with a woman driver with fair charges and par services. Also, finding a walkmate at unknown routes is also simple with our Chatbuddy.
      </p>
      <div className="work-img">
      {/* <img src="https://media.istockphoto.com/id/1089511686/vector/taxi-service-mobile-application-carpool-late-night-female-passenger-waiting-for-a-car-flat.jpg?s=612x612&w=0&k=20&c=AYwgg4XoXMIfcmPYUAlAB4v3HPE6naV4U6JKENevwXE=" alt="" /> */}
      <img src="https://images.pexels.com/photos/5965925/pexels-photo-5965925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default Content
