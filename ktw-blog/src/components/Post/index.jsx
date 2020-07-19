import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Editor from "./Editor";
import CommandBar from "./CommandBar";
import { THEME } from "../../enums";
import { CellStore, CellContext, CellDispatchContext } from "../../stores/CellStore";
import { cellActionCreator } from "../../actions/CellAction";

import './Post.scss';

const BackgroundTheme = styled.div`
  height: 100%;
  background-color: ${THEME.VS_CODE.EDITOR};
  min-width 220px;
  max-width: 700px;
  margin: 0 auto;
`;

const PostHeader = ({ isNew, category }) => {
  const { state } = useContext(CellContext);
  const dispatch = useContext(CellDispatchContext);
  const { title } = state;

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(cellActionCreator.inputTitle(value));
  }

  return (
    <header>
      <input
        type="text"
        placeholder="제목"
        value={title}
        className="title"
        onChange={onChange}
        autoFocus={isNew}
      ></input>
      {/*//todo 확인문구 추가하기 */}
      <Link to="/">취소</Link>
      <CommandBar />
    </header>
  );
}

const Post = (props) => {
  const { match } = props;
  let { userId, category, docId } = match.params;
  if(match.path === "/:userId/new") {
    category = "new";
    docId = "new";
  }
  return (
    <>
      <CellStore>
        <BackgroundTheme>
          <section className="post">
            <PostHeader
              isNew={docId === "new" ? true : false}
            />
            <Editor
              userId={userId}
              category={category}
              docId={docId}
            />
          </section>
        </BackgroundTheme>
      </CellStore>
    </>
  )
}

export default Post;
