import React, { useState, useEffect, useContext } from 'react';

import { CellContext, CellDispatchContext } from "../../../stores/CellStore";
import { cellActionCreator } from "../../../actions/CellAction";

import './CommandBar.scss';

const CommandBar = () => {
  const { state } = useContext(CellContext);
  const dispatch = useContext(CellDispatchContext);

  const { category } = state;
  const [isNew, setIsNew] = useState(false);
  const [crtCategory, setCrtCategory] = useState("");
  const categoryList = JSON.parse(localStorage.getItem("categoryList")) || [];

  const changeCategory = (category) => {
    dispatch(cellActionCreator.categoryChange(category));
  }

  useEffect(() => {
    if(!categoryList.includes(category)) {
      setIsNew(true);
    }
    else {
      setIsNew(false);
    }
  }, [category, categoryList]);

  return (
    <div className="command_bar">
      <select
        value={category}
        onChange={(e) => {
          const {value} = e.target;
          if(value === "new") {
            setIsNew(true);
            changeCategory("");
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
          >
            {cate}
          </option>
        ))}
      </select>
      {isNew &&
        <input
          type="text"
          name="newCategory"
          value={crtCategory}
          placeholder="new category"
          onChange={e => {
            setCrtCategory(e.target.value);
          }}
          onBlur={() => {
            changeCategory(crtCategory);
          }}
          autoFocus
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
