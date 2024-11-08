import React from 'react'
import "./home.css";
import logo from '../../assets/logo.svg'

const Home = () => {
  return (
    <section className="home container section">
      <img src={logo} width={250} height={250} alt="" />

      <div className="header__container grid">
      <h1 className="header">Summer McGee</h1> 
        <div className="header2">
          <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home