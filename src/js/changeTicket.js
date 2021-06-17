export default function changeTicket(params, server) {
  params.append('method', 'editTicket');
  const xhr = new XMLHttpRequest();
  return new Promise((resolve) => {
    xhr.open('PUT', `${server}/tickets/:id/?${params}`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 204) {
        resolve(xhr.response);
      }
    });
    xhr.send(params);
  });
}
