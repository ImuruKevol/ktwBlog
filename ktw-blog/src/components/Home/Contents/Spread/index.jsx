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
  }
  
  useEffect(() => {
    const [url, method] = API.CATEGORY.LIST(userId);
    request({
      url,
      method,
    }).then(res => {
      categorize(res.data);
    });
  }, []);

  return (
    <div className="spread">
      {Object.keys(posts).map(category => (
        <Category
          key={"category-" + category}
          category={category}
          posts={posts[category]}
        />
      ))}
    </div>
  )
}

export default Spread
