const books = [
  'Мастер и Маргарита',
  'Гарри Поттер',
  'Над пропастью во ржи',
  'Властелин колец',
  'Дюна',
  'Отцы и дети'
];

const bookList = document.querySelector('#book-list');
const addBtn = document.querySelector('#add-btn');
const searchBtn = document.querySelector('#search-btn');

function renderBooks(foundIndex = -1) {
  bookList.innerHTML = '';

  books.forEach((title, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}) ${title}`;

    if (index === foundIndex) {
      li.classList.add('found');
    }

    bookList.appendChild(li);
  });
}

function addBook() {
  const input = prompt('Введите название книги:');

  if (input === null) {
    return;
  }

  const title = input.trim();

  if (title === '') {
    alert('Название книги не введено!');
    return;
  }

  books.push(title);
  renderBooks();
}

function searchBook() {
  const input = prompt('Введите название книги для поиска:');

  if (input === null) {
    return;
  }

  const query = input.trim().toLowerCase();
  const items = bookList.querySelectorAll('li');
  items.forEach(item => item.classList.remove('found'));

  if (query === '') {
    alert('Книга не найдена!');
    return;
  }

  const foundIndex = books.findIndex(
    (title) => title.toLowerCase() === query
  );

  if (foundIndex === -1) {
    alert('Книга не найдена!');
    return;
  }

  items[foundIndex].classList.add('found');
}

addBtn.addEventListener('click', addBook);
searchBtn.addEventListener('click', searchBook);

renderBooks();