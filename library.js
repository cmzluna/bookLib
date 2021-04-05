/*
Basado en :
https://sultanbadri.github.io/virtual-library/

DOCS:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Overlays
https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/


Otros Buenos ejemplos:

https://zakarya-mks.github.io/my-library/
https://mooniidev.github.io/library/
*/

const newBook = document.querySelector('#new-book');
const formContainer = document.querySelector('#container');
const overlay = document.querySelector('.overlay');

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

function addBookToLibrary() {
    // do stuff here
  }

function displayBooks() {
    // display in a 'card' style
}

// new Book button
// brings up a form allowing users to input the details for the new book: 
// author, title, number of pages, whether it’s been read and anything else you might want.
newBook.addEventListener('click', formOpenOrClosed);

// button on each books card  to remove book from library 