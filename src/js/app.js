/* eslint-disable no-unused-vars */
import HelpDesk from './helpDesk';
import Form from './form';
import getAllTickets from './getAllTickets';

const data = getAllTickets();
data.then((resolve) => {
  window.heplDesk = new HelpDesk('.app', resolve);
  window.heplDesk.init();
  [...document.querySelectorAll('.form')].forEach((el) => {
    const form = new Form(el);
  });
});
