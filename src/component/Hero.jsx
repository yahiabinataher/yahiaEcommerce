import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {Button} from "../styles/Button.js"

const Hero = ({myData}) => {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-data">
                    <p className='intro-data'>Welcome to</p>
                    <h1 className='common-heading'>{myData.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, iusto? Numquam eius quod dolorum vel cupiditate neque reiciendis, iusto est corrupti reprehenderit deleniti magnam velit labore doloribus assumenda consequuntur cum.</p>
                    <NavLink>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
                <div className="hero-img">
                    <figure>
                        <img className='img-style' src="./images/hero.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 100%;
height: auto;
padding: 12rem 0;
.hero-img {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    figure{
    position: relative;
    &::after{
        content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
      
   
}
    .img-style{
    min-width: 10rem;
    height: 35rem;
    
    
}
  }
  }
  


`

export default Hero