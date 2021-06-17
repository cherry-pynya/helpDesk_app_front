export default function getAllTickets(server) {
  const params = new URLSearchParams();
  params.append('method', 'allTickets');
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.open('GET', `${server}/tickets/?${params}`, true);
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.response));
        } catch (e) {
          reject(e);
        }
      }
    });
    xhr.send();
  });
}
