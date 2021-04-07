/*
DOCS:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Overlays
https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
*/

const newBook = document.querySelector('#new-book');
const formContainer = document.querySelector('#container');
const overlay = document.querySelector('.overlay');
const btnAgregar = document.querySelector('.boton-agregar');
const form = document.getElementById('form');
const bookshelf = document.querySelector(".bookshelf");

let formOpen = false;
let myLibrary = [];

function Book(title, author, pages, readIt) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readIt = readIt,
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.readIt}`;
    }
}

function formOpenOrClosed() {
    if (formOpen) {
        formContainer.style.transform = "scale(0)";
        overlay.style.opacity = 0;
        newBook.style.transform = "rotate(0deg)";
        formOpen = false;
      } else {
        formContainer.style.transform = "scale(1)";
        newBook.style.transform = "rotate(45deg)";
        overlay.style.opacity = 1;
        formOpen = true;
      }
}

function addBookToLibrary(i) {
  // do stuff here
  console.log(i);

  let bookNode = document.createElement("div");
  bookNode.classList.add("book");
 
  const title = document.getElementById("title").value;
  let titleNode = document.createElement("h2");
  titleNode.innerHTML = `"${title}"`;

  const author = document.getElementById("author").value;
  let authorNode = document.createElement("h3");
  authorNode.innerHTML = `Author: ${author}`;

  const pages = document.getElementById("pages").value;
  let pageNode = document.createElement("h3");
  pageNode.innerHTML = `Pages: ${pages}`;

  const read = document.getElementById("read").value;
  let readNode = document.createElement("h3");
  readNode.innerHTML = `Read? ${read}${read === "Yes" ? "😃" : "😢"}`;

  // create Book instance 
  const newBookInstance = new Book(title, author, pages, read);
  myLibrary.push(newBookInstance);

  // update data-index once instance has been given an index ID
  // I don't need this in fact as the index is being given in the trashnode Eventhandler
  //bookNode.setAttribute("data-index", myLibrary.indexOf(newBookInstance));

  let updateNode = document.createElement("button");
  updateNode.classList = "update";
  updateNode.innerHTML = `Update <i class="fas fa-pen"></i>`;

  let trashNode = document.createElement("button");
  trashNode.classList = "trash";
  trashNode.innerHTML = `Delete <i class="fas fa-trash-alt">`;

  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pageNode);
  bookNode.appendChild(readNode);
  bookNode.appendChild(updateNode);
  bookNode.appendChild(trashNode);
  bookshelf.appendChild(bookNode);

  console.log(bookNode);

  formOpenOrClosed();
  form.reset();

  trashNode.addEventListener("click", () => {
    bookshelf.removeChild(bookNode);
    myLibrary.splice(myLibrary.indexOf(newBookInstance), 1);  // no funciona borrando bien el item 
  });

}

function displayBooks() {
    // display in a 'card' style
}

function resetForm() {

}

// new Book button
// brings up a form allowing users to input the details for the new book: 
// author, title, number of pages, whether it’s been read and anything else you might want.
newBook.addEventListener('click', formOpenOrClosed);
function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

form.addEventListener("submit", (e, i) => {
  e.preventDefault();
  addBookToLibrary(i);
  console.log(i);
}
)
// button on each books card to remove book from library 
const bookSection = document.querySelector('.bookSection'); 

// close form if clicked on the empty portion or on close btn
bookSection.addEventListener('click', (e) => {
  if (
    e.target.className === 'bookSection' ||
    e.target.classList.contains('close-modal')
  ) {
    // can't reuse formOpenOrClosed because clicking in bookSection would trigger opening the modal again!
    formContainer.style.transform = "scale(0)";
        overlay.style.opacity = 0;
        newBook.style.transform = "rotate(0deg)";
        formOpen = false;
  }
});

