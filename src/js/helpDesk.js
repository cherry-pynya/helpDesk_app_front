/* eslint-disable class-methods-use-this */
import Item from './item';
import taskFactory from './taskFactory';
import getAllTickets from './getAllTickets';

export default class HelpDesk {
  constructor(el, arr, server) {
    if (typeof (el) === 'string') {
      this.element = document.querySelector(el);
    } else {
      this.element = el;
    }

    this.tasks = arr;
    this.server = server;
    this.btn = this.element.querySelector('.call-form');
    this.list = this.element.querySelector('.task-list');

    this.addTask = this.addTask.bind(this);

    this.btn.addEventListener('click', this.addTask);
  }

  init() {
    this.element.querySelector('.task-list').textContent = '';
    if (this.tasks.length > 0) {
      this.tasks.forEach((a) => {
        const task = taskFactory(a);
        this.list.insertAdjacentHTML('beforeend', task);
      });
      [...this.element.querySelectorAll('.list-item')].forEach((el) => {
        // eslint-disable-next-line no-unused-vars
        const item = new Item(el, this);
      });
    }
  }

  addTask() {
    document.querySelector('.modal').classList.toggle('invalid');
    document.querySelector('.add-task').classList.toggle('invalid');
  }

  changeTask() {
    document.querySelector('.modal').classList.toggle('invalid');
    document.querySelector('.change-task').classList.toggle('invalid');
  }

  update() {
    const update = getAllTickets(this.server);
    update.then((resolve) => {
      this.tasks = resolve;
      this.init();
    });
  }
}
