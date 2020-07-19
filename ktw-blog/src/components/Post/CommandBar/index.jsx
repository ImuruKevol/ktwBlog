import React, { useState, useEffect, useContext } from 'react';

import { CellContext, CellDispatchContext } from "../../../stores/CellStore";
import { cellActionCreator } from "../../../actions/CellAction";

import './CommandBar.scss';

const CommandBar = () => {
  const { state } = useContext(CellContext);
  const dispatch = useContext(CellDispatchContext);

  const { category } = state;
  const [isNew, setIsNew] = useState(category === "new" ? true : false);
  const categoryList = JSON.parse(localStorage.getItem("categoryList"));

  const changeCategory = (category) => {
    dispatch(cellActionCreator.categoryChange(category));
  }

  useEffect(() => {
    setIsNew(category === "new" ? true : false)
  }, [category]);

  return (
    <div className="command_bar">
      {/* //todo undo */}
      {/* <button>Undo</button> */}
      <select
        onChange={(e) => {
          const {value} = e.target;
          if(value === "new") {
            setIsNew(true);
          }
          else {
            setIsNew(false);
            changeCategory(value);
          }
        }}
      >
        <option value="new">새 카테고리</option>
        {categoryList.map((cate, idx) => (
          <option
            value={cate}
            key={`category-list-${idx}`}
            selected={cate===category?true:false}
          >
            {cate}
          </option>
        ))}
      </select>
      {isNew &&
        <input
          type="text"
          name=""
          value=""
          onChange={(e) => {
            const { value } = e.target;
            changeCategory(value);
          }}
        />
      }
      <button
        className="save"
        onClick={() => {
          dispatch(cellActionCreator.save());
        }}
      >
        SAVE
      </button>
    </div>
  )
}

export default CommandBar;
