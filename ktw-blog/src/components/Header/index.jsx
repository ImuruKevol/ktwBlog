import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {

  return (
    <header>
      <Link to="/">
        Kevol Writer(가제)
      </Link>
    </header>
  )
}

export default Header
