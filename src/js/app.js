/* eslint-disable no-unused-vars */
import HelpDesk from './helpDesk';
import Form from './form';
import getAllTickets from './getAllTickets'

window.heplDesk = new HelpDesk('.app');
window.heplDesk.init();
[...document.querySelectorAll('.form')].forEach((el) => {
  const form = new Form(el);
});

const data = getAllTickets();
console.log(data);
