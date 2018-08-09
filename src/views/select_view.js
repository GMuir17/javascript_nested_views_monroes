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
  const monroRegions = this.getMonroRegion(monroes)

  monroRegions.forEach((region, index) =>{
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    this.container.appendChild(option);
  })
};

SelectView.prototype.getMonroRegion = function (monroes) {
  return monroes
    .map(monro => monro.region)
    .filter((region, index, monroes) => monroes.indexOf(region) === index);
};

module.exports = SelectView;
