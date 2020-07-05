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
  const cellDispatch = useContext(CellDispatchContext);
  const { cellManager } = state;
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
    cellDispatch(cellActionCreator.focusMove(lastCellUuid));
    blockRelease(cellDispatch);
  }

  useEffect(() => {
    if (cellLength === 0) {
      cellDispatch(cellActionCreator.focusAttachRef(inputRef));
      if(category !== "new" && docId !== "new") {
        const [url, method] = API.DOCUMENT.LOAD(userId, category, docId);
        request({
          url,
          method,
        }).then(res => {
          const {title, content} = res.data;
          cellDispatch(cellActionCreator.init(category, title, content, docId));
          focusLastCell();
        });
      }
      else {
        cellDispatch(cellActionCreator.init());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, cellDispatch, cellLength, cellManager, docId, userId]);

// todo 포스트 열었을 때 로딩 돌아가는거 추가하기
  return (
    <div className="post-editor" onClick={(e) => {
      focusLastCell();
    }}>
      {cells.map((cell, cellIndex) => {
        const uuidArray = uuidManager.getUuidArray();
        const key = uuidArray[cellIndex];
        return <React.Fragment key={key}>{cell}</React.Fragment>;
      })}
    </div>
  );
};

export default EditorComponent;
