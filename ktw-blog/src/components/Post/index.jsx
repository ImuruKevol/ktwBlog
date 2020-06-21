import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Editor from "./Editor";
import { THEME } from "../../enums";
import { CellStore } from "../../stores/CellStore";

import './Post.scss';

const BackgroundTheme = styled.div`
  height: 100%;
  background-color: ${THEME.VS_CODE.EDITOR};
  min-width 220px;
  max-width: 700px;
  margin: 0 auto;
`;

const Post = ({match}) => {
  const { user, postId } = match.params;
  console.log(user, postId)

  return (
    <>
      <CellStore>
        <BackgroundTheme>
          <section className="post">
            <header>
              <strong>임시 타이틀 영역</strong>
              {/*//todo 확인문구 추가하기 */}
              <Link to="/">취소</Link>
            </header>
            <Editor className="post-editor" />
          </section>
        </BackgroundTheme>
      </CellStore>
    </>
  )
}

export default Post;
