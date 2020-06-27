// import createDebug from "debug";
import axios from "axios";

// const debug = createDebug("boost:request");

const SERVER_API = process.env.REACT_APP_SERVER_URL;

const defaultOptions = {
  method: "GET",
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

/**
 * request common function
 * @param {*} opts 
 * 
 * example
 * 
 * url: 'document/imurukevol/1',
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
  return response;
}

export { request };
