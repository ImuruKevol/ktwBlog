import React, { useEffect, useState } from 'react'
import { API } from '../../../../enums'
import { request } from '../../../../utils'

import Category from './Category'
import './Spread.scss'

const Spread = () => {
  //todo 세션 or 쿠키에서 userId 받아오기. BE에서는 둘다 체크할거임
  const [posts,  setPosts] = useState({});
  const userId = "imurukevol";

  const categorize = (list) => {
    let tmpPosts = {};
    list.map(item => {
      const { category } = item;
      if(tmpPosts[category] === undefined) {
        tmpPosts[category] = [];
      }
      const post = {...item};
      delete post.category;
      tmpPosts[category].push(post);
      return null;
    });

    setPosts(tmpPosts);
    localStorage.setItem("categoryList", JSON.stringify(Object.keys(tmpPosts)));
  }
  
  useEffect(() => {
    const [url, method] = API.CATEGORY.LIST(userId);
    request({
      url,
      method,
    }).then(res => {
      if(res.data.length > 0) {
        categorize(res.data);
      }
    });
  }, []);

  return (
    <div className="spread">
      {Object.keys(posts).length > 0 ?
      Object.keys(posts).map(category => (
        <Category
          key={"category-" + category}
          category={category}
          posts={posts[category]}
        />
      ))
      :
      <a href="/imurukevol/new" className="no-content">
        포스트가 없습니다.<br />새 글을 등록해보세요.
      </a>
      }
    </div>
  )
}

export default Spread
