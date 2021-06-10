/* eslint-disable class-methods-use-this */
import Item from './item';

export default class HelpDesk {
  constructor(el) {
    if (typeof (el) === 'string') {
      this.element = document.querySelector(el);
    } else {
      this.element = el;
    }

    this.btn = this.element.querySelector('.call-form');
    this.list = this.element.querySelector('.task-list');

    this.addTask = this.addTask.bind(this);

    this.btn.addEventListener('click', this.addTask);
  }

  init() {
    [...this.element.querySelectorAll('.list-item')].forEach((el) => {
      // eslint-disable-next-line no-unused-vars
      const item = new Item(el);
    });
  }

  addTask() {
    document.querySelector('.modal').classList.toggle('invalid');
    document.querySelector('.add-task').classList.toggle('invalid');
  }
}
