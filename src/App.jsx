import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // TODO: Implement state for dark mode toggle

  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>

      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        />

        <br />
        <br />

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>

        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
        selectedCategory={selectedCategory}
        onAddToCart={addToCart} />

        <Cart items={cart} />
      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
