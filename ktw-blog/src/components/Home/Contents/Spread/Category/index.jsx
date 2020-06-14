import React from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

import Card from './Card'

const Category = () => {

  return (
    <section className="category">
      {/* map으로 뿌려야댐 */}
      <strong className="category-name">Category Name</strong>
      <Link to="/imurukevol/123">
        <Card />
      </Link>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default Category
