const PubSub = require("../helpers/pub_sub.js");

const MonroListView = function (container) {
  this.container = container;
};

MonroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Monroes:all-data-ready', (evt) => {
    const monroes = evt.detail;
    console.log(monroes);
  });

};


module.exports = MonroListView;
