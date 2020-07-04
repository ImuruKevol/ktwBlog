import React from 'react'
import './Card.scss'

const Card = ({ docId, title, subtitle }) => {
  return (
    <div className="card">
      {/* //todo 썸네일 추가? */}
      <strong>{title}</strong>
      <p>{subtitle}</p>
    </div>
  )
}

export default Card
