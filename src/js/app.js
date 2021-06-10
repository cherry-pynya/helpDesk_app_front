/* eslint-disable no-unused-vars */
import HelpDesk from './helpDesk';
import Form from './form';

window.heplDesk = new HelpDesk('.app');
[...document.querySelectorAll('.form')].forEach((el) => {
  const form = new Form(el);
});

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:7070/?fuck', true);
xhr.send();
console.log(xhr);
