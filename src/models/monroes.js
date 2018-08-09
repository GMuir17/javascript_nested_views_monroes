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
