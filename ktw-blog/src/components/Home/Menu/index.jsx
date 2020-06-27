import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useKey } from "../../../utils/HandlerManager";
import { EVENT_TYPE } from "../../../enums";
import './Menu.scss'

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const onClickMenu = () => {
    setMenu(!menu);
  }

  useKey(EVENT_TYPE.CTRL_B, onClickMenu, true, [menu]);

  return (
    <div className="menu">
      <ul className={
        menu? "main_menu on" : "main_menu close"
      }>
        <li>
          <Link to="/imurukevol/new" onClick={() => {
            onClickMenu();
          }}>
            새 글 쓰기
          </Link>
        </li>
      </ul>
      <button
        className={
          menu? "main_menu_toggle_btn on" : "main_menu_toggle_btn close"
        }
        onClick={onClickMenu}>
          {menu ? "<<" : ">>"}
      </button>
    </div>
  )
}

export default Menu
