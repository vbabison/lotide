const without = function(source, itemsToRemove) {
  const filtered = source.filter(el => {
    return itemsToRemove.indexOf(el) === -1;
  });
  console.log(filtered);
};

module.exports = without;