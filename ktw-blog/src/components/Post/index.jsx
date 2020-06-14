import React from 'react'
import styled from "styled-components";

import Editor from "./Editor";
import { THEME } from "../../enums";
import { CellStore } from "../../stores/CellStore";

import './Post.scss';

const BackgroundTheme = styled.div`
  height: 100%;
  background-color: ${THEME.VS_CODE.EDITOR};
`;

const Post = () => {
  //todo scss를 styled로 바꾸고 디렉토리 정리하기
  return (
    <>
      <CellStore>
        <BackgroundTheme>
          <section className="post">
            <header>
              <strong>임시 타이틀 영역</strong>
            </header>
            <Editor className="post-editor" />
          </section>
        </BackgroundTheme>
      </CellStore>
    </>
  )
}

export default Post;
