import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ category, docId, title, subtitle }) => {
  return (
    <Link
      to={`/imurukevol/${category}/${docId}`}
      className="card"
    >
      {/* //todo 썸네일 추가? */}
      <strong>{title}</strong>
      <p>{subtitle}</p>
    </Link>
  )
}

export default Card
