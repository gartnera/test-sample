function length(str) {
  return str.length;
}

function mergeMaps(a, b) {
  const res = {};
  for (const key of Object.keys(a)) {
    res[key] = a[key];
  }
  for (const key of Object.keys(b)) {
    res[key] = b[key];
  }

  return res;
}

module.exports = {
  length,
  mergeMaps,
};
