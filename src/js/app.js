/* eslint-disable no-unused-vars */
import HelpDesk from './helpDesk';
import Form from './form';
import getAllTickets from './getAllTickets';

const server = 'http://localhost:7777';
const data = getAllTickets(server);
data.then((resolve) => {
  window.heplDesk = new HelpDesk('.app', resolve, server);
  window.heplDesk.init();
  [...document.querySelectorAll('.form')].forEach((el) => {
    const form = new Form(el, window.heplDesk, server);
  });
});
