import React from 'react'
import './Category.scss'

import Card from './Card'

const Category = () => {

  return (
    <section className="category">
      {/* map으로 뿌려야댐 */}
      {/* strong -> hn태그로 변경 */}
      <strong className="category-name">Category Name</strong>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default Category
