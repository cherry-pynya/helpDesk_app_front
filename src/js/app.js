import HelpDesk from './helpDesk';

window.heplDesk = new HelpDesk('.app');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:7070/?fuck', true);
xhr.send();
console.log(xhr);


