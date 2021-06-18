export default function deleteTicket(params, server) {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve) => {
    xhr.open('DELETE', `${server}/tickets/:id/?${params}`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 204) {
        resolve(xhr.response);
      }
    });
    xhr.send(params);
  });
}
