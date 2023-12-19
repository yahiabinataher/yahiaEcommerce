import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmount = ({amount,increase,decrease}) => {
  return (
    <div className="cart-button">
    <div className="amount-toggle">
      <button onClick={() => decrease()  }>
        <FaMinus />
      </button>
      <div className="amount-style">{amount}</div>
      <button onClick={() => increase()}>
        <FaPlus />
      </button>
    </div>
  </div>
  )
}

export default CartAmount