import React from 'react'
import './Spread.scss'

import Category from './Category'

const Spread = () => {
  const categoryList = ['react'];
  // const categoryList = ['react', 'vanilaJS'];
  //todo
  // category fetching

  return (
    <div className="spread">
      {categoryList.map(category => (
        <Category
          key={"category-" + category}
          category={category}
        />
      ))}
    </div>
  )
}

export default Spread
