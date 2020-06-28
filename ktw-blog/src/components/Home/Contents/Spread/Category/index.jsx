import React from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

import Card from './Card'

const Category = ({ category }) => {
  const postList = ['1', '2', '3', '4', '5', '6'];
  //todo
  // category로 postList fetching
  // 초기에 보여지는건 10개까지. 모두보기 누르면 다른 카테고리 사라지고 이 카테고리 전체 리스트 뿌려줌
  // 전체 리스트는 페이지 단위로
  // 한 페이지당 30개씩? -> 미정

  return (
    <section className="category">
      <strong className="category-name">{category}</strong>
      {postList.map(id => (
        //todo 추후에 서비스를 할 시에는 imurukevol 자리에 사용자 id가 들어갈 예정
        <Link key={"card-"+id} to={`/imurukevol/${category}/${id}`}>
          <Card
            docId={id}
          />
        </Link>
      ))}
    </section>
  )
}

export default Category
