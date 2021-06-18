/* eslint-disable class-methods-use-this */
import deleteTicket from './deleteTicket';
import changeStatus from './changeStatus';
import getTicketById from './getTicketById';

export default class Item {
  constructor(el, app) {
    if (typeof (el) === 'string') {
      this.element = document.querySelector(el);
    } else {
      this.element = el;
    }
    this.app = app;
    this.onClick = this.onClick.bind(this);
    this.form = this.element.querySelector('.list-item-container');
    this.changeBtn = this.element.querySelector('.change');

    this.element.addEventListener('click', this.onClick);
    this.form.addEventListener('submit', (e) => {
      this.onSubmit(e);
      this.app.update();
    });
    this.form.addEventListener('change', () => {
      this.onChange();
      this.app.update();
    });
    this.changeBtn.addEventListener('click', () => {
      this.onChangeTicket();
      this.app.update();
    });
  }

  onChangeTicket() {
    const { id } = this.element.dataset;
    const change = getTicketById(id, this.app.server);
    change.then((resolve) => {
      const task = resolve;
      document.querySelector('.change-task').querySelector('.form-input-header').value = task.name;
      if ('description' in task) {
        document.querySelector('.change-task').querySelector('.form-input-text').value = task.description;
      }
      document.querySelector('.change-task').dataset.id = task.id;
    });
    this.app.changeTask();
  }

  onChange() {
    changeStatus(this.getParams(), this.app.server);
    this.app.update();
  }

  onSubmit(e) {
    e.preventDefault();
    deleteTicket(this.getParams(), this.app.server);
    this.app.update();
  }

  getParams() {
    const params = new URLSearchParams();
    const { id } = this.element.dataset;
    params.append('id', id);
    return params;
  }

  onClick(e) {
    if (this.element.querySelector('.list-item-texr-container') !== null) {
      if (e.target.closest('.list-item')
      && e.target !== this.element.querySelector('.checkbox')
      && e.target !== this.element.querySelector('.change')
      && e.target !== this.element.querySelector('.delete')
      ) {
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
}
