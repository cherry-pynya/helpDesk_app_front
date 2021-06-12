export default function changeStatus(params) {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve) => {
    xhr.open('POST', 'https://netologyahj7.herokuapp.com/?method=changeTicket');
    xhr.addEventListener('load', () => {
      if (xhr.status === 204) {
        resolve(xhr.response);
      }
    });
    xhr.send(params);
  });
}
