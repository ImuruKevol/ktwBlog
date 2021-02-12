import React from 'react';

import Card from './Card';
import './Category.scss';

const Category = ({ category, posts }) => {
  //todo
  // 초기에 보여지는건 10개까지. 모두보기 누르면 다른 카테고리 사라지고 이 카테고리 전체 리스트 뿌려줌
  // 전체 리스트는 페이지 단위로
  // 한 페이지당 30개씩? -> 미정

  return (
    <section className="category">
      <strong className="category-name">{category}</strong>
      {posts.map(post => (
        <Card
          key={`${category}-${post.docId}`}
          category={category}
          docId={post.docId}
          title={post.title}
          subtitle={post.subtitle}
        />
      ))}
    </section>
  )
}

export default Category
