import React from 'react'
import './Spread.scss'

import Category from './Category'

const Spread = () => {

  return (
    <div className="spread">
      {/* map으로 뿌려야댐 */}
      <Category />
      <Category />
    </div>
  )
}

export default Spread
