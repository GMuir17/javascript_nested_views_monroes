const Monroes = require("./models/monroes.js");
const MonroListView = require("./views/monro_list_view");

document.addEventListener('DOMContentLoaded', () => {

 const container = document.querySelector("#monroes");
 const monroListView = new MonroListView(container);
 monroListView.bindEvents();

  const monroes = new Monroes();
  monroes.getData();


});
