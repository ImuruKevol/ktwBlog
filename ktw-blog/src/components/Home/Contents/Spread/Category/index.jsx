import React from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

import Card from './Card'

const Category = ({ category, posts }) => {
  console.log(posts);

  //todo
  // category로 postList fetching
  // 초기에 보여지는건 10개까지. 모두보기 누르면 다른 카테고리 사라지고 이 카테고리 전체 리스트 뿌려줌
  // 전체 리스트는 페이지 단위로
  // 한 페이지당 30개씩? -> 미정

  return (
    <section className="category">
      <strong className="category-name">{category}</strong>
      {posts.map(post => (
        //todo imurukevol 자리에 세션의 userId 넣기
        <Link
          key={"card-"+post.docId}
          to={`/imurukevol/${category}/${post.docId}`}
          className="card-wrap"
        >
          <Card
            docId={post.docId}
            title={post.title}
            subtitle={post.subtitle}
          />
        </Link>
      ))}
    </section>
  )
}

export default Category
