/**
 * Created by chia-yenhung on 4/8/17.
 */
export const defaultOpts = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const checkStatus = (response) => {
  const {
    status,
    statusText
  } = response;
  if (status >= 200 && status < 300) {
    return response;
  } else {
    const error = new Error(statusText);
    error.response = response;
    throw error;
  }
};

export const parseJSON = (response) => {
  return response.json();
};

export const objToQuery = (opts) => {
  const strs = [];
  const {
    data = {}
  } = opts;
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      strs.push(`${key}=${data[key]}`);
    }
  }
  return strs.join("&");
};

export const constructOpts = (opts) => {
  let url = opts.url;
  if (!url) {
    return;
  }
  if (!opts.method || opts.method === "GET") {
    const query = objToQuery(opts);
    delete opts.data;
    url = query ? `${url}?${query}` : url;
  }
  delete opts.url;
  return {
    url,
    constructedOpts: opts
  };
};

export const createPromise = (opts) => {
  const {
    url,
    constructedOpts,
  } = constructOpts(opts);
  return fetch(url, constructedOpts)
    .then(checkStatus)
    .then(parseJSON);
};
