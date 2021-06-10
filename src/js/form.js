/* eslint-disable class-methods-use-this */
export default class Form {
  constructor(el) {
    if (typeof (el) === 'string') {
      this.element = document.querySelector(el);
    } else {
      this.element = el;
    }

    this.submitBtn = this.element.querySelector('.submit');
    this.cancelBtn = this.element.querySelector('.cancel');

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.submit = this.submit.bind(this);

    this.submitBtn.addEventListener('click', this.onSubmit);
    this.cancelBtn.addEventListener('click', this.onCancel);
    this.element.addEventListener('submit', this.submit);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onCancel() {
    document.querySelector('.modal').classList.toggle('invalid');
    document.querySelector('.add-task').classList.toggle('invalid');
    this.clear();
  }

  submit() {
    this.clear();
  }

  clear() {
    this.element.querySelector('.form-input-header').value = '';
    this.element.querySelector('.form-input-text').value = '';
  }
}
