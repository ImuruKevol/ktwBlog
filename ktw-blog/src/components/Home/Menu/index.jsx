import React, {useState} from 'react'
import './Menu.scss'

const Menu = () => {
  const [menu, setMenu] = useState(false);
  
  const onClickMenu = () => {
    setMenu(!menu);
  }

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
