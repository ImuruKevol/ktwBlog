import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Editor from "./Editor";
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

const PostHeader = () => {
  const { state } = useContext(CellContext);
  const dispatch = useContext(CellDispatchContext);
  const { title } = state;

  return (
    <header>
      <input type="text" placeholder="제목" value={title} onChange={(e) => {
        const { value } = e.target;
        dispatch(cellActionCreator.inputTitle(value));
      }}></input>
      {/*//todo 확인문구 추가하기 */}
      <Link to="/">취소</Link>
    </header>
  );
}

const Post = ({match}) => {
  const { userId, category, docId } = match.params;
  console.log(userId, category, docId)

  return (
    <>
      <CellStore>
        <BackgroundTheme>
          <section className="post">
            <PostHeader />
            <Editor
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
