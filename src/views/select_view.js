const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Monroes:all-data-ready", (evt) => {
    const monroes = evt.detail;
    console.log(monroes);
  })
};

module.exports = SelectView;
