import React from 'react'
import './Card.scss'

const Card = () => {

  return (
    <div className="">
      {/* 썸네일 추가? */}
      <strong>this is card title</strong>
      {/* 100자나 한 그정도만 읽어서 scss에 멀티라인 include로 2~3줄정도*/}
      <p>this is card body</p>
    </div>
  )
}

export default Card
