import React from 'react'
import styled from 'styled-components'
import Hero from './component/Hero'
import Services from './component/Services'
import Trusted from './component/Trusted'
import Featuar from './Featuar'

const Home = () => {
  const data = {
    name:"Yahia Store",
    
  }
  return (
    <>
    <Wrapper>
      <Hero myData={data}/>
      <Featuar/>
      <Services/>
      <Trusted/>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`

`

export default Home