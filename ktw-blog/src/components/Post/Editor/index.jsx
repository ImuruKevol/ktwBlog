import React, { useContext, useEffect, useRef } from "react";

import { CellContext, CellDispatchContext } from "../../../stores/CellStore";
import { cellActionCreator } from "../../../actions/CellAction";
import { setGenerator } from "./cells/CellGenerator";
import { uuidManager } from "../../../utils";
import {
  MarkdownCell,
  HeadingCell,
  ListCell,
  QuoteCell,
  CodeCell,
} from "./cells";
import { blockRelease } from "./cells/Markdown/handler";

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

const EditorComponent = ({ className }) => {
  const { state } = useContext(CellContext);
  const cellDispatch = useContext(CellDispatchContext);
  const { cellManager } = state;
  const { cells } = cellManager;
  const inputRef = useRef(null);
  const cellLength = state.cellManager.cells.length;

  useEffect(() => {
    const shareDocumentContent = localStorage.getItem("share-document-content");
    const isShared = localStorage.getItem("isShared");
    if (shareDocumentContent && isShared) {
      cellDispatch(cellActionCreator.shareLoad());
      const document = JSON.parse(shareDocumentContent);
      cellManager.load(document);
      cellDispatch(cellActionCreator.shareLoadFinish());
      localStorage.removeItem("share-document-content");
      localStorage.removeItem("isShared");
    }
  }, [cellDispatch, cellManager]);

  useEffect(() => {
    if (cellLength === 0) {
      cellDispatch(cellActionCreator.focusAttachRef(inputRef));
      cellDispatch(cellActionCreator.init());
    }
  }, [cellDispatch, cellLength]);

  const focusLastCell = () => {
    const uuidArray = uuidManager.getUuidArray();
    const lastCellUuid = uuidArray[uuidArray.length - 1];
    cellDispatch(cellActionCreator.focusMove(lastCellUuid));
    blockRelease(cellDispatch);
  }

  return (
    <div className={className} onClick={(e) => {
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
