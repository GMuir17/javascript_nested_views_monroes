const PubSub = require("../helpers/pub_sub.js");
const MonroView = require("./monro_view.js");

const MonroListView = function (container) {
  this.container = container;
};

MonroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Monroes:all-data-ready', (evt) => {
    const monroes = evt.detail;
    this.render(monroes);
  });

};



MonroListView.prototype.render = function (monroes) {
   monroes.forEach((monro) =>{
     const monroView = new MonroView(this.container, monro);
     monroView.render();
   });

};


module.exports = MonroListView;
