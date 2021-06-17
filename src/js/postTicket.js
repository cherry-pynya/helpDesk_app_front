export default function postTicket(params, server) {
  console.log(params);
  const xhr = new XMLHttpRequest();
  return new Promise((resolve) => {
    xhr.open('POST', `${server}/tickets/?${params}`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 204) {
        resolve(xhr.response);
      }
    });
    xhr.send(JSON.stringify(params));
  });
}
