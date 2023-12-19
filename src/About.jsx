import React from 'react'
import styled from 'styled-components'
import Hero from './component/Hero'

const About = () => {
  const data = {
    name:"Yahia Bin Ataher"
  }
  return (
    <>
    <Wrapper>
      <Hero myData={data}/>
    </Wrapper>
    </>
  )
}
const Wrapper = styled.section`

`

export default About