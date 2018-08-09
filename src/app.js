const Monroes = require("./models/monroes.js");
const MonroListView = require("./views/monro_list_view");
const SelectView = require("./views/select_view");

document.addEventListener('DOMContentLoaded', () => {

 const container = document.querySelector("#monroes");
 const monroListView = new MonroListView(container);
 monroListView.bindEvents();

 const selectContainer = document.querySelector("#selector");
 const selectView = new SelectView(selectContainer);
 selectView.bindEvents();

  const monroes = new Monroes();
  monroes.getData();
  monroes.bindEvents();


});
