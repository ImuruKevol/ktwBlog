import React, { useContext, useEffect, useRef } from "react";

import { CellContext, CellDispatchContext } from "../../../stores/CellStore";
import { cellActionCreator } from "../../../actions/CellAction";
import { setGenerator } from "./cells/CellGenerator";
import { uuidManager, request } from "../../../utils";
import {
  MarkdownCell,
  HeadingCell,
  ListCell,
  QuoteCell,
  CodeCell,
} from "./cells";
import { blockRelease } from "./cells/Markdown/handler";
import { useKey } from "../../../utils/HandlerManager";
import { EVENT_TYPE } from "../../../enums";
import { API } from "../../../enums";

setGenerator("p", (uuid) => <MarkdownCell cellUuid={uuid} />);
setGenerator("code", (uuid) => <CodeCell cellUuid={uuid} />);
setGenerator("h1", (uuid) => <HeadingCell cellUuid={uuid} />);
setGenerator("h2", (uuid) => <HeadingCell cellUuid={uuid} />);
setGenerator("h3", (uuid) => <HeadingCell cellUuid={uuid} />);
setGenerator("h4", (uuid) => <HeadingCell cellUuid={uuid} />);
setGenerator("h5", (uuid) => <HeadingCell cellUuid={uuid} />);
setGenerator("h6", (uuid) => <HeadingCell cellUuid={uuid} />);
setGenerator("ul", (uuid) => <ListCell cellUuid={uuid} />);
setGenerator("ol", (uuid) => <ListCell cellUuid={uuid} />);
setGenerator("blockquote", (uuid) => <QuoteCell cellUuid={uuid} />);

const EditorComponent = ({ userId, category, docId }) => {
  const { state } = useContext(CellContext);
  const dispatch = useContext(CellDispatchContext);
  const { cellManager, isLoading } = state;
  const { cells } = cellManager;
  const inputRef = useRef(null);
  const cellLength = state.cellManager.cells.length;

  // useEffect(() => {
  //   const shareDocumentContent = localStorage.getItem("share-document-content");
  //   const isShared = localStorage.getItem("isShared");
  //   if (shareDocumentContent && isShared) {
  //     cellDispatch(cellActionCreator.shareLoad());
  //     const document = JSON.parse(shareDocumentContent);
  //     cellManager.load(document);
  //     cellDispatch(cellActionCreator.shareLoadFinish());
  //     localStorage.removeItem("share-document-content");
  //     localStorage.removeItem("isShared");
  //   }
  // }, [cellDispatch, cellManager]);

  const focusLastCell = () => {
    const uuidArray = uuidManager.getUuidArray();
    const lastCellUuid = uuidArray[uuidArray.length - 1];
    dispatch(cellActionCreator.focusMove(lastCellUuid));
    blockRelease(dispatch);
  }

  //todo 새 글쓰기 모드일 때 포커스를 제목으로 가게 하기
  useEffect(() => {
    if (cellLength === 0) {
      dispatch(cellActionCreator.focusAttachRef(inputRef));
      if(category !== "new" && docId !== "new") {
        const [url, method] = API.DOCUMENT.LOAD(userId, category, docId);
        request({
          url,
          method,
        }).then(res => {
          const {title, content} = res.data;
          dispatch(cellActionCreator.init(category, title, content, docId));
          dispatch(cellActionCreator.load());
          focusLastCell();
        });
      }
      else {
        dispatch(cellActionCreator.init());
        dispatch(cellActionCreator.load());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, dispatch, cellLength, cellManager, docId, userId]);

  //todo 저장 후 알림 띄우기
  //todo subtitle 저장 하는 서식 정비하기(현재 1, 2째줄로 저장하고 있음.)
  const documentSave = () => {
    dispatch(cellActionCreator.save());
  }

  useKey(EVENT_TYPE.CTRL_S, documentSave);

//todo 포스트 열었을 때 로딩 돌아가는 애니메이션 추가하기
  return (
    <div className="post-editor" onClick={(e) => {
      focusLastCell();
    }}>
      {isLoading ? 
        "Loading..."
        :
        cells.map((cell, cellIndex) => {
          const uuidArray = uuidManager.getUuidArray();
          const key = uuidArray[cellIndex];
          return <React.Fragment key={key}>{cell}</React.Fragment>;
        })
      }
    </div>
  );
};

export default EditorComponent;
