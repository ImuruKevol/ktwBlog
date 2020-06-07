import React, { useState } from 'react'
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
        this is menu
      </ul>
      <button
        className={
          menu? "main_menu_toggle_btn on" : "main_menu_toggle_btn close"
        }
        onClick={onClickMenu}>
          {">>"}
      </button>
    </div>
  )
}

export default Menu
