const Monroes = require("./models/monroes.js");

document.addEventListener('DOMContentLoaded', () => {

  const monroes = new Monroes();
  monroes.bindEvents();
});
