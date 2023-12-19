import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
import { TiSocialGithubCircular,TiSocialLinkedinCircular,TiSocialTwitterCircular } from "react-icons/ti";


const Footer = () => {
  return (
    <Wrapper>
        <div className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button><NavLink to="/contact">Get Started</NavLink></Button>
                </div>
            </div>
          
        </div>
        <footer>
          
          <div className="mid-footer">
              <div className="grid grid-four-column">
                  <div className="f-heading">
                      <h3>Yahia Technical</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicin?</p>
                  </div>
                  <div className="f-sub">
                    <h3>Subscribe to get impotant update</h3>
                    <form action="">
                        <input type="email" placeholder='Your Email' />
                        <input type="submit" />
                    </form>
                  </div>
                  <div className="f-flow">
                  <h3>Follow Us</h3>
                  <div className="link">
                    <TiSocialGithubCircular/>
                    <TiSocialLinkedinCircular/>
                    <TiSocialTwitterCircular/>
                  </div>
                  </div>
                  <div className="f-con">
                    <h3>Call Us</h3>
                    <span>+08801611636456</span>
                  </div>
              </div>
          </div>
  </footer>
       
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 15rem;
background-color: ${({theme}) => theme.colors.footer_bg };
padding: 3rem 0;
.contact-short{
    width: 60vw;
    margin: 0 auto;
    border-radius: 1rem;
    padding: 5rem 5rem;
    background-color:  ${({theme}) => theme.colors.bg };
    margin-top: -10rem;
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
   
}
footer{
    width: 60vw;
    margin: 0 auto;
    margin-top: 5rem;
    .f-heading{
        h3,p{
            color: #fff;
        }
       h3{
        font-size: 2rem;
       }
       p{
        font-size: 1.4rem;
        margin-top: 0.5rem;
       }
    }
    .f-sub{
        h3{
            color: #fff;
        }
        form{
            margin-top: 2rem;
        }
    }
    .f-flow{
        color:#fff;
        .link{
            font-size: 3rem;
            margin-top: 1rem;
           
        }
    }
    .f-con{
        color:#fff;
        h3{
            margin-bottom: 2rem;
        }
        span{
            font-size: 1.5rem;
          margin-top: 5rem;
        }
    }

}
`

export default Footer