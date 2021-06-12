/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import postTicket from './postTicket';
import changeTicket from './changeTicket';

export default class Form {
  constructor(el, app) {
    if (typeof (el) === 'string') {
      this.element = document.querySelector(el);
    } else {
      this.element = el;
    }
    this.app = app;

    this.submitBtn = this.element.querySelector('.submit');
    this.cancelBtn = this.element.querySelector('.cancel');

    this.onCancel = this.onCancel.bind(this);
    this.submit = this.submit.bind(this);

    this.cancelBtn.addEventListener('click', this.onCancel);
    this.element.addEventListener('submit', this.submit);
  }

  onCancel() {
    this.clear();
  }

  submit(e) {
    e.preventDefault();
    if (this.element.querySelector('.form-input-header').value === '') {
      alert('Please insert name of the task');
      return false;
    }
    if (this.element.classList.contains('add-task')) {
      const params = new URLSearchParams();
      Array.from(this.element.elements)
        .filter((el) => {
          if (el.name) return el;
        })
        .forEach((el) => {
          params.append(el.name, el.value);
        });
      const ticket = postTicket(params);
      this.app.update();
      ticket.then(() => {
        this.app.update();
      });
    }
    if (this.element.classList.contains('change-task')) {
      const params = new URLSearchParams();
      Array.from(this.element.elements)
        .filter((el) => {
          if (el.name) return el;
        })
        .forEach((el) => {
          params.append(el.name, el.value);
        });
      params.append('id', this.element.dataset.id);
      const ticket = changeTicket(params);
      this.app.update();
      ticket.then(() => {
        this.app.update();
      });
    }
    this.clear();
  }

  clear() {
    this.element.querySelector('.form-input-header').value = '';
    this.element.querySelector('.form-input-text').value = '';
    document.querySelector('.modal').classList.toggle('invalid');
    document.querySelector('.add-task').classList.toggle('invalid');
  }
}
