export const mapToKey = (arr, key) => {
  return arr.reduce((obj, item) => {
    Object.assign(obj, { [item[key]]: item });
    return obj;
  }, {});
};

export const getUniqueValues = (arr, key) => {
  if (key) {
    return arr
      .map((item) => item[key])
      .filter((value, index, self) => self.indexOf(value) === index);
  }
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};
