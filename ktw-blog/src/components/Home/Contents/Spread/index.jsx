import React, { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../../../../stores/LoginStore';
import { API } from '../../../../enums'
import { request, logout } from '../../../../utils'
import Category from './Category'
import './Spread.scss'

const Spread = () => {
  const { state } = useContext(LoginContext);
  const { userId } = state;
  const [posts,  setPosts] = useState({});

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
    }).then(data => {
      if(data.length > 0) {
        categorize(data);
      }
    }).catch(err => {
      console.error(err);
      logout();
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
