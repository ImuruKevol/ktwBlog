// import createDebug from "debug";
import axios from "axios";

// const debug = createDebug("boost:request");

const SERVER_API = process.env.REACT_APP_SERVER_URL;

const defaultOptions = {
  method: "GET",
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Cache: "no-cache",
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
  const response = await axios(options)
  if(response.status === 200) {
    return response.data === "" ? true : response.data;
  }
  if(response.status === 401) {
    localStorage.removeItem("userId");
    window.location.href = "/";
  }
  throw new Error("Request Error");
}

export { request };
