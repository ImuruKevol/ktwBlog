import createDebug from "debug";
import axios from "axios";

const debug = createDebug("boost:request");

const BASE_URL = process.env.SERVER_URL;

const PATH = {
  SAVE: "api/document",
  LOAD: "api/document",
  TERMINAL: "api/terminal",
  SHARE: "api/share",
};

const defaultOptions = {
  method: "GET",
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};


/**
 * 하나로 통일하기.
 * fetch로 바꾸기?
 * - 이 경우엔 axios 모듈 제거
 */
const request = {
  async saveDocument({ containerId, documentString }) {
    const options = {
      ...defaultOptions,
      method: "PATCH",
      url: `${BASE_URL}/${PATH.SAVE}`,
      validateStatus: () => {
        return true;
      },
      data: {
        containerId,
        docContent: documentString,
      },
    };
    const response = await axios(options);
    return response;
  },

  async loadDocument(containerId) {
    const options = {
      ...defaultOptions,
      url: `${BASE_URL}/${PATH.LOAD}/${containerId}`,
      validateStatus: () => {
        return true;
      },
    };
    const response = await axios(options);
    return response;
  },

  async shareDocument(containerId) {
    const options = {
      ...defaultOptions,
      method: "POST",
      url: `${BASE_URL}/${PATH.SHARE}`,
      validateStatus: () => {
        return true;
      },
      data: {
        containerId,
      },
    };
    const response = await axios(options);
    return response;
  },

  async loadSharingDocument(shareId) {
    const options = {
      ...defaultOptions,
      url: `${BASE_URL}/${PATH.SHARE}/${shareId}`,
      validateStatus: () => {
        return true;
      },
    };
    const response = await axios(options);
    return response;
  },
};

export { request };
