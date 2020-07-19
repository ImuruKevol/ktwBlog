import createDebug from "debug";
import { CELL_ACTION } from "../actions/CellAction";
import {
  common,
  focus,
  block,
  target,
  clipboard,
} from "./CellReducerHandler";
import { request } from "../utils";
import { API } from "../enums";

const debug = createDebug("boost:reducer:cell");

const cellReducerHandler = {
  [CELL_ACTION.INIT]: (state, action) => {
    const { cellManager } = state;
    const { category, docId, title, content } = action;

    common.initCell(cellManager);
    if(content)
      cellManager.load(JSON.parse(content));

    debug("Init cell next state", state.cellManager);

    return {
      ...state,
      cellManager: state.cellManager,
      category,
      title,
      docId,
    };
  },

  [CELL_ACTION.NEW]: (state) => {
    const { currentIndex, cursor, cellManager } = state;

    const result = common.newCell(currentIndex, cellManager, {
      cursor,
    });

    const nextState = {
      ...state,
      ...result,
    };

    debug("New cell", nextState);

    return nextState;
  },

  [CELL_ACTION.NEW_LIST]: (state) => {
    const { currentIndex, cellManager, cursor } = state;
    const result = common.newListCell(currentIndex, cellManager, { cursor });

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.NEW_EMPTY]: (state) => {
    const { cellManager, currentIndex } = state;

    common.newEmptyCell(currentIndex, cellManager);

    return {
      ...state,
      currentIndex: currentIndex + 1,
    };
  },

  [CELL_ACTION.INPUT]: (state, action) => {
    const { cellManager } = state;
    const { cellUuid, text } = action;
    const result = common.inputText(cellUuid, cellManager, { text });

    debug("Cell Change text", cellManager);

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.INPUT_TITLE]: (state, action) => {
    const { text } = action;

    return {
      ...state,
      title: text,
    }
  },

  [CELL_ACTION.DELETE]: (state, action) => {
    const { currentIndex, cellManager } = state;
    const { text } = action;

    const result = common.deleteCell(currentIndex, cellManager, { text });

    debug("Cell delete", result);

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.FOCUS.PREV]: (state) => {
    const { currentIndex } = state;
    const nextIndex = focus.prev(currentIndex);

    debug(`Cell focus prev ${currentIndex} to ${nextIndex}`);

    return {
      ...state,
      currentIndex: nextIndex,
    };
  },

  [CELL_ACTION.FOCUS.NEXT]: (state) => {
    const { currentIndex, cellManager } = state;
    const nextIndex = focus.next(currentIndex, cellManager.cells.length);

    debug(`Cell focus next ${currentIndex} to ${nextIndex}`);

    return {
      ...state,
      currentIndex: nextIndex,
    };
  },

  [CELL_ACTION.FOCUS.MOVE]: (state, { cellUuid }) => {
    const { cellManager } = state;

    const result = focus.move(cellUuid, cellManager);

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.FOCUS.ATTACH]: (state, action) => {
    return {
      ...state,
      inputRef: action.inputRef,
    };
  },

  [CELL_ACTION.TARGET.TRANSFORM]: (state, action) => {
    const { cellUuid, cell, text, tag, depth, start } = action;
    const result = target.transform(cellUuid, state.cellManager, {
      cell,
      text,
      tag,
      depth,
      start,
    });

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.TARGET.RESET]: (state) => {
    const { currentIndex, cellManager } = state;
    target.reset(currentIndex, cellManager);

    return {
      ...state,
    };
  },

  [CELL_ACTION.BLOCK.ALL]: (state) => {
    const { cells } = state.cellManager;
    const result = block.selectAllBlock(cells.length - 1);

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.BLOCK.UP]: (state) => {
    const result = block.blockRangeUp(state.currentIndex, state.block);
    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.BLOCK.DOWN]: (state) => {
    const { cells } = state.cellManager;
    const result = block.blockRangeDown(
      state.currentIndex,
      state.block,
      cells.length
    );

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.BLOCK.RELEASE]: (state) => {
    const emptyBlock = {
      start: null,
      end: null,
    };
    return {
      ...state,
      block: emptyBlock,
    };
  },

  [CELL_ACTION.BLOCK.DELETE]: (state) => {
    const { cellManager } = state;

    const result = block.blockDelete(cellManager, { block: state.block });

    debug("Cells delete for Block", result);

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.CURSOR.MOVE]: (state, action) => {
    const cursor = {
      start: action.selectionStart,
      end: action.selectionEnd,
    };

    return {
      ...state,
      cursor,
    };
  },

  [CELL_ACTION.CLIPBOARD.COPY]: (state) => {
    if (state.block.start === null) {
      return state;
    }
    const result = clipboard.copy(state.cellManager, state.block);
    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.CLIPBOARD.PASTE]: (state) => {
    const { cellManager, currentIndex } = state;

    const dataObj = {
      clipboard: state.clipboard,
    };
    const result = clipboard.paste(currentIndex, cellManager, dataObj);

    return {
      ...state,
      ...result,
    };
  },

  [CELL_ACTION.DOCUMENT.SAVE]: (state) => {
    const { cellManager, title, category, docId, changedCategory } = state;

    const content = cellManager.createMarkdownDocument();
    //todo userId는 session으로 바꾸기
    const userId = "imurukevol";
    const [url, method] = API.DOCUMENT.SAVE(userId, category, docId);
    let data = {
      title,
      content,
    };

    if(changedCategory) {
      data = Object.assign({changedCategory}, data);
    }

    request({
      url,
      method,
      data,
    }).then(res => {
      console.log(res);
      //todo res.status로 성공/실패 동작 추가하기
    })

    return {
      ...state
    }
  },

  [CELL_ACTION.DOCUMENT.LOAD]: (state) => {
    return {
      ...state,
      isLoading: false,
    }
  },

  [CELL_ACTION.DOCUMENT.CATEGORY.CHANGE]: (state, action) => {
    const { category } = action;
    return {
      ...state,
      category,
      changedCategory: true,
    }
  },
};

const cellReducer = (state, action) => {
  const handler = cellReducerHandler[action.type];
  if (handler === undefined) {
    return state;
  }

  return handler(state, action);
};

export default cellReducer;
