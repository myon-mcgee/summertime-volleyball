import React from 'react'
import "./home.css";
import logo from '../../assets/cropped_image.png'

const Home = () => {
  return (

    <div>
      <section className="home container section">
      <img src={logo} width={200} height={200} alt="" className='homeimg'/>
      <div className="header__container grid">
      <div>
      </div>
      <h1 className="header">Summer McGee</h1> 
        <div className="header2">
          <div className="info">
            <p>
            DS/Liberio <br/>
            Olive-Harvey Community College Transfer<br/>
            Class of 2027 3.7GPA
            </p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Home