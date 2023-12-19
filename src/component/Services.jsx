import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";




const Services = () => {
  return (
    <>
    
    <Wrapper>
        <div className="container">
            <div className="grid grid-three-column">
                <div className="services-1">
                    <div>
                        <TbTruckDelivery/>
                        <h3>Super Fast And Free Delivary</h3>
                    </div>
                </div>
                <div className="services-2">
                    <div className="services-column-2">
                        <div>
                        <MdSecurity/>
                        <h3>Non-contact Shipping</h3>
                        </div>
                    </div>
                    <div className="services-column-2">
                        <div>
                        <GiReceiveMoney/>
                        <h3>Money-back Guaranteed</h3>
                        </div>
                    </div>
                    </div>
                <div className="services-3"> 
                        <div> 
                        <RiSecurePaymentLine/>
                        <h3>Super Secure Payment System</h3>
                        </div>
                </div>
            </div>
        </div>

    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
padding: 9rem 0;
.services-1,
.services-2,
.services-3{
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0,0,0,0.05) 0px 1px 2px 0px;
    div{
        &:first-child{
            font-size: 5rem;
        }
    }
}
 .services-2{
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    
    .services-column-2{
        background-color: ${({theme}) => theme.colors.bg };
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: 0.8rem;
        width: 35rem;
        
    }

} 
`

export default Services