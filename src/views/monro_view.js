
const MonroView = function(container, monro) {
  this.container = container;
  this.monro = monro;
}

MonroView.prototype.render = function () {
  const monroContainer = document.createElement('div');
  this.container.appendChild(monroContainer);

  const name = this.createMonroHeading();
  monroContainer.appendChild(name);

  const list = this.createList();
  monroContainer.appendChild(list);

};

MonroView.prototype.createMonroHeading = function () {
  const name = document.createElement("h2");
  name.textContent = this.monro.name;
  return name;
};

MonroView.prototype.createList = function () {
  const monroInfoList = document.createElement("ul");
  this.populateList(monroInfoList);
  return monroInfoList;
};

MonroView.prototype.populateList = function (list) {

    const monroListHeight = document.createElement('li');
    const monroListMeaning = document.createElement('li');
    monroListHeight.textContent = this.monro.height;
    monroListMeaning.textContent = this.monro.meaning;
    list.appendChild(monroListHeight);
    list.appendChild(monroListMeaning);
};

module.exports = MonroView;
