let myData = null;

const set = function(data) {
  myData = data;
};

const get = function() {
  return myData;
}

module.exports = { set, get };