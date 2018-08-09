const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (container) {
  this.container = container;
  this.monroes = null;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Monroes:all-data-ready", (evt) => {
    const monroes = evt.detail;
    this.populateDropDown(monroes);
  });
  this.container.addEventListener('change', (evt) => {
    const monroIndex = evt.target.value;
    PubSub.publish('SelectView:selected-monro-index', monroIndex);
  });
};

SelectView.prototype.populateDropDown = function (monroes) {
  monroes.forEach((monro, index) =>{
    const option = document.createElement('option');
    option.textContent = monro.region;
    option.value = index;
    this.container.appendChild(option);
  })

};

module.exports = SelectView;
