/* eslint-disable class-methods-use-this */
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

  addTask() {
    document.querySelector('.add-task').classList.toggle('invalid');
  }
}
