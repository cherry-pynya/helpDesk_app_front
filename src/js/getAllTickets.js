export default function getAllTickets() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:7070/?allTickets', true);
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
        return data;
      } catch (e) {
        console.error(e);
      }
    }
  });
}
