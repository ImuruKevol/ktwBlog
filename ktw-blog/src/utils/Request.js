// import createDebug from "debug";
import axios from "axios";
import { API } from "../enums";

// const debug = createDebug("boost:request");

const SERVER_API = process.env.REACT_APP_SERVER_URL;

const defaultOptions = {
  method: "GET",
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  credentials: 'include',
};

/**
 * request common function
 * @param {*} opts 
 * 
 * example
 * 
 * url: 'document/{userId}/{documentId}',
 * 
 * method: 'get' // or post or patch or delete or etc...
 * 
 * data: {
 *    ...
 * }
 */
const request = async (opts) => {
  const options = {
    ...defaultOptions,
    ...opts,
    url: `${SERVER_API}/${opts.url}`,
    validateStatus: () => true,
  };
  const response = await axios(options);
  if(response.status === 200) {
    return response.data === "" ? true : response.data;
  }
  window.location.href = "/login";
  throw new Error("Request Error");
}

const logout = async (userId) => {
  const [url, method] = API.USER.LOGOUT(userId);
  await request({url, method});
  window.location.href = "/login";
}

export { request, logout };
