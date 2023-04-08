import React from 'react'
import './feedhome.css'

const Feedhome = () => {
  return (

 
    <main className="feed-main">
         <div className="title">
      <h2>Reviews</h2>
      {/* <div className="underline"></div> */}
    </div>
  <section className="feed-container">

    <article className="review">
      <div className="img-container">
        <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg" alt="" id="person-img" />
      </div>
      <h4 id="author">Rashi Malik</h4>
      {/* <p id="job">Artist</p> */}
      <p id="info">
      Met new friends on the way through Chatbuddy. Love the app.
      </p>

    </article>
    <article className="review">
      <div className="img-container">
        <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg" alt="" id="person-img" />
      </div>
      <h4 id="author">Mihika Sardana</h4>
      {/* <p id="job">Student</p> */}
      <p id="info">
        Overall a nice experience. Loved the ride.
      </p>
      {/* <div class="button-container">
        <button class="prev-btn btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div> */}
    </article>
  
  </section>
</main>
  )
}

export default Feedhome
