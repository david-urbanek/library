const myLibrary = [new Book("Harry Potter Philosopher's Stone", "J. K. Rowling", 309, "not read")];

function Book(bookName, author, numPages, read) {
  this.name = bookName;
  this.author = author;
  this.pages = numPages /// pridat input
  this.read =read
}

function addBook(bookName, author, numPages, read) {
  const newBook = new Book(bookName, author, numPages, read);
  myLibrary.push(newBook);
  displayBook();
}

let index;

function displayBook() {

  function createBook(id){
    const newBook = document.createElement("div");
    newBook.classList.add("newBook");
    newBook.setAttribute("id", `book${id}`);
    document.querySelector("#myLibrary").appendChild(newBook);

    const newBookTitle = document.createElement("h1");
    newBookTitle.textContent = myLibrary[id].name;
    newBookTitle.classList.add("newBookTitle");
    document
      .querySelector(`#book${id}`)
      .appendChild(newBookTitle);

    const newBookAuthor = document.createElement("h2");
    newBookAuthor.textContent = `Author: ${myLibrary[id].author}`;
    newBookAuthor.classList.add("newBookAuthor");
    document
      .querySelector(`#book${id}`)
      .appendChild(newBookAuthor);

    const newBookNumPages = document.createElement("h2");
    newBookNumPages.textContent = `Number of pages: ${myLibrary[id].pages}`;
    newBookNumPages.classList.add("newBookNumPages");
    document
      .querySelector(`#book${id}`)
      .appendChild(newBookNumPages);

    const newBookStatusRead = document.createElement("h2");
    newBookStatusRead.textContent = `Status: ${myLibrary[id].read}`;
    newBookStatusRead.classList.add("newBookNumPages");
    document
      .querySelector(`#book${id}`)
      .appendChild(newBookStatusRead);

    const newBookRemoveButton = document.createElement("button");
    newBookRemoveButton.classList.add("newBookNumPages");
    newBookRemoveButton.setAttribute("id", `removeButton${id}`);
    newBookRemoveButton.textContent = "Remove"
    document
      .querySelector(`#book${id}`)
      .appendChild(newBookRemoveButton);

    document.querySelector(`#removeButton${id}`).addEventListener("click", function(){ //removes dom elements/objects from myLibrary
      delete myLibrary[id];
      newBook.remove()
      console.log(myLibrary)
    })

    const newBookReadStatusChangeButton = document.createElement("button");
    newBookReadStatusChangeButton.classList.add("newBookNumPages");
    newBookReadStatusChangeButton.setAttribute("id", `newBookReadStatusChangeButton${id}`);
    newBookReadStatusChangeButton.textContent = "Change status"
    document
      .querySelector(`#book${id}`)
      .appendChild(newBookReadStatusChangeButton);

    document.querySelector(`#newBookReadStatusChangeButton${id}`).addEventListener("click", function(){
      if(myLibrary[index].read == "read"){
        myLibrary[index].read = "not read"
        newBookStatusRead.textContent = `Status: ${myLibrary[id].read}`;
      }else{
        myLibrary[index].read = "read"
        newBookStatusRead.textContent = `Status: ${myLibrary[id].read}`;
      }
    })
  }
  if (index > 0) {
    createBook(myLibrary.length-1);
  } else {
    for (index = 0; index < myLibrary.length; index++) {
      createBook(index)
    }
  }
  }

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    // Handle the form data
    event.preventDefault();
  });

document.querySelector("#submitButton").addEventListener("click", function () {
  const bookName = document.querySelector("#bookName").value;
  const author = document.querySelector("#author").value;
  const numPages = document.querySelector("#numPages").value;
  let read = document.querySelector("#read").value;
  console.log(read)
  if(read == "on"){
    read = "not read";
  }
  addBook(bookName, author, numPages, read);
});

displayBook()
