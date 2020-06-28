import React, { useEffect } from 'react'
import { API } from '../../../../enums'
import { request } from '../../../../utils'

import Category from './Category'
import './Spread.scss'

const Spread = () => {
  //todo 세션 or 쿠키에서 userId 받아오기. BE에서는 둘다 체크할거임
  const userId = "imurukevol";
  let categoryList = ['react', 'vanilaJS'];
  
  const getCategoryList = async () => {
    const [url, method] = API.CATEGORY.LIST(userId);
    const result = await request({
      url,
      method,
    });
    
    console.log(result.data);
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="spread">
      {categoryList.map(category => (
        <Category
          key={"category-" + category}
          userId={userId}
          category={category}
        />
      ))}
    </div>
  )
}

export default Spread
