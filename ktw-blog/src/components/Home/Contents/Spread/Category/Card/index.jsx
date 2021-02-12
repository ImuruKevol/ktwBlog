import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { API } from "../../../../../../enums";
import { LoginContext } from "../../../../../../stores/LoginStore";
import { request } from "../../../../../../utils";
import './Card.scss';

const Card = ({ category, docId, title, subtitle }) => {
  const { state } = useContext(LoginContext);
  const { userId } = state;

  const onClickDelete = async e => {
    e.stopPropagation();
    e.preventDefault();
    // todo 삭제 확인 모달
    const [url, method] = API.DOCUMENT.DELETE(userId, category, docId);
    const result = await request({url, method});
    if(!result) return;
    // todo 삭제 후 card list 상태 변경
  }

  return (
    <Link
      to={{
        pathname: `/${userId}/${category}/${docId}`,
      }}
      className="card"
    >
      <strong>{title}</strong>
      <p>{subtitle}</p>
      <button className="btn-delete" onClick={onClickDelete}>&#128465;</button>
    </Link>
  )
}

export default Card
