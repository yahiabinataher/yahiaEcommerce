import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'


const Error = () => {

  return (
    <Wrapper>
      <div className="container">
        <div className="error">
          <h3>Oops!</h3>
         
          <h4>404 Page Not Found</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia porro inventore molestiae iusto maxime ullam ex repellendus nam placeat.</p>
          <NavLink to="/"><Button>Go To HomePage</Button></NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0;
.error{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin: 0 auto;
  h3{
    font-size: 10rem;
    color:  rgb(98 84 243);
  }
  h4{
    font-size: 5rem;
  }
  p{
    text-align: justify;
  }
}
`

export default Error