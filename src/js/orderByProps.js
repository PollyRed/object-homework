export default function orderByProps(obj, arr) {
  const result = [];

  for (const prop of arr) {
    result.push({ key: prop, value: obj[prop] });
  }

  const otherProperties = [];

  for (const prop in obj) {
    if (!arr.includes(prop)) {
      otherProperties.push({ key: prop, value: obj[prop] });
    }
  }

  otherProperties.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
    return 0;
  });

  return [...result, ...otherProperties];
}
