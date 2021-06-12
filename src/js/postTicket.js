export default function postTicket(params) {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve) => {
    xhr.open('POST', 'http://localhost:7070/?method=createTicket');
    xhr.addEventListener('load', () => {
      if (xhr.status === 204) {
        resolve(xhr.response);
      }
    });
    xhr.send(params);
  });
}
