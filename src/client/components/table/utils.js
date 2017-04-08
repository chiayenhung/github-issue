/**
 * Created by chia-yenhung on 4/7/17.
 */

export const getObject = (name, result) => {
  const object = {};
  for(const key in name) {
    object[key] = result[name[key]];
  }
  return object;
};

export const get = (name, result) => {
  if (name && typeof name === "object") {
    return getObject(name, result);
  }
  return result[name];
};
