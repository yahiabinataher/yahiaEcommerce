import React from "react";
import styled from "styled-components";

const Products = () => {
  return <>
  <Wrapper>
    <h1>product</h1>
    </Wrapper>
  </>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

 
`;

export default Products;
// @media (max-width: ${({ theme }) => theme.media.mobile}) {
//   .grid-filter-column {
//     grid-template-columns: 1fr;
//   }
//  }