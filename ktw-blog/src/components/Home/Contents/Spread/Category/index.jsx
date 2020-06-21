import React from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

import Card from './Card'

const Category = ({ category }) => {
  const postList = ['1', '2', '3', '4', '5', '6'];

  return (
    <section className="category">
      <strong className="category-name">{category}</strong>
      {postList.map(id => (
        <Link key={"card-"+id} to={`/imurukevol/${id}`}>
          <Card
            postId={id}
          />
        </Link>
      ))}
    </section>
  )
}

export default Category
