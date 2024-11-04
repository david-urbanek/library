let bookName;
let author;

document.querySelector("#submitButton").onclick = function() {
  bookName = document.querySelector("#bookName").value;
  author = document.querySelector("author").value;
}

const myLibrary = [];

function Book(name) {
  this.name = name;
}

function addBook(name) {
  const newBook = new Book(name);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach(){

  }
}
console.log(bookName);
addBook();

