const PubSub = require("../helpers/pub_sub.js");
const RequestHelper = require("../helpers/request_helper.js");

const Monroes = function () {
  this.monroes = null;
};

Monroes.prototype.bindEvents = function () {
  const monroesData = this.getData();
  PubSub.publish("Monroes:all-data-ready", monroesData);
  console.log(monroesData);

};

Monroes.prototype.getData = function () {
  const requestHelper = new RequestHelper("https://munroapi.herokuapp.com/api/munros");
  requestHelper.get((data) => {
    console.log(data);
   const monroesData = this.monroDataRead(data);
  });
};


module.exports = Monroes;
