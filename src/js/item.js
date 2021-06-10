export default class Item {
  constructor(el) {
    if (typeof (el) === 'string') {
      this.element = document.querySelector(el);
    } else {
      this.element = el;
    }

    this.onClick = this.onClick.bind(this);

    this.element.addEventListener('click', this.onClick);
  }

  onClick(e) {
    if (e.target.closest('.list-item')) {
      this.element.querySelector('.list-item-texr-container').classList.toggle('invalid');
    }
    if (!this.element.querySelector('.list-item-texr-container').classList.contains('invalid')) {
      e.target.closest('.list-item').querySelector('.list-item-container').style.border = 'none';
      e.target.closest('.list-item').style.border = '1px solid black';
    } else {
      e.target.closest('.list-item').querySelector('.list-item-container').style.border = '1px solid black';
      e.target.closest('.list-item').style.border = 'none';
    }
  }
}
