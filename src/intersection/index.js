function intersection(a, b) {
  const map = new Map();
  const set = new Set();

  a.forEach((element) => {
    map.set(element, element);
  });

  b.forEach((element) => {
    if (map.get(element)) {
      set.add(element);
    }
  });

  return [...set];
}

module.exports = intersection;
