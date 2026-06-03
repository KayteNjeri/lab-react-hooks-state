import { ListItemSecondaryAction } from '@mui/material'
import React from 'react'

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} is in your cart.
          </li>
        ))}
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
      </ul>
    </div>
  )
}

export default Cart
