export default function taskFactory(obj) {
  if (obj.status) {
    if (obj.description !== undefined) {
      return (`
      <li class="list-item" data-id='${obj.id}'>
      <form class="list-item-container">
      <input type="checkbox" class="checkbox" checked>
        <h2>${obj.name}</h2>
        <time>${obj.created}</time>
        <div class="list-item-btn-containe">
          <button class="list-item-btn change" type='button'>✎</button>
          <button class="list-item-btn delete" type='submit'>X</button>
        </div>
      </form>
      <div class="invalid list-item-texr-container">
        <p>${obj.description}</p>
      </div>
    </li>
    `);
    }
    return (`
      <li class="list-item" data-id='${obj.id}'>
      <form class="list-item-container">
      <input type="checkbox" class="checkbox" checked>
        <h2>${obj.name}</h2>
        <time>${obj.created}</time>
        <div class="list-item-btn-containe">
          <button class="list-item-btn change" type='button'>✎</button>
          <button class="list-item-btn delete" type='submit'>X</button>
        </div>
      </form>
    </li>
    `);
  }
  if (obj.description !== undefined) {
    return (`
    <li class="list-item" data-id='${obj.id}'>
    <form class="list-item-container">
    <input type="checkbox" class="checkbox">
      <h2>${obj.name}</h2>
      <time>${obj.created}</time>
      <div class="list-item-btn-containe">
        <button class="list-item-btn change" type='button'>✎</button>
        <button class="list-item-btn delete" type='submit'>X</button>
      </div>
    </form>
    <div class="invalid list-item-texr-container">
      <p>${obj.description}</p>
    </div>
  </li>
  `);
  }
  return (`
    <li class="list-item" data-id='${obj.id}'>
    <form class="list-item-container">
    <input type="checkbox" class="checkbox">
      <h2>${obj.name}</h2>
      <time>${obj.created}</time>
      <div class="list-item-btn-containe">
        <button class="list-item-btn change" type='button'>✎</button>
        <button class="list-item-btn delete" type='submit'>X</button>
      </div>
    </form>
  </li>
  `);
}
