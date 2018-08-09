const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

const Monroes = function () {
  this.monroes = [];
};

Monroes.prototype.getData = function () {
  const requestHelper = new RequestHelper("https://munroapi.herokuapp.com/api/munros");
  requestHelper.get((data) => {
    this.monroDataFormat(data);
    PubSub.publish("Monroes:all-data-ready", this.monroes);
  });
};

Monroes.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:selected-monro-index', (evt) =>{
    const region = evt.detail;
    console.log(region);
    const filteredMonroes = this.filterMonroesByRegion(region);
    console.log(filteredMonroes);
    PubSub.publish('Monroes:selected-monroes',filteredMonroes );
  });
};

Monroes.prototype.filterMonroesByRegion = function (region) {
  return this.monroes.filter(monro => monro.region === region);
};



Monroes.prototype.monroDataFormat = function (monroesData) {
  this.monroes = monroesData.map((monro) => {
    return {
      name: monro.name,
      meaning: monro.meaning,
      height: monro.height,
      region: monro.region
    };
  });
};


module.exports = Monroes;
