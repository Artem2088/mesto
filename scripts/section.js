export default class Section {
  constructor({ items, renderer }, cardsContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = cardsContainer;
  }

  addItem(element) {
    // Добавляем в DOM
    this._container.append(element);
  }
  //рендер карточек
  renderAllCards(items) {
    this._items.forEach((item) => {
      //функция добавления карточек с массива
      this._renderer(item);
    });
  }
}
