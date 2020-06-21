import React from 'react'
import './Spread.scss'

import Category from './Category'

const Spread = () => {
  const categoryList = ['react', 'vanilaJS'];

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
