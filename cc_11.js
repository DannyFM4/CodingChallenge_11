// Task 1: Creating a Book Class

class Book { // creates a class called book
    constructor(title, author, isbn, copies) {
        // defines all of the parameters
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };

    getDetails() { // creates a method in the class that will call all of the details of the book
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    };

    updateCopies(quantity) { // creates a method in the class that will update the amount of copies or output a message
        if (this.copies >= quantity) {
            this.copies += quantity;
        } else {
            console.log(`There are not enough copies available`);
        };
    };
};

// creates a new book and uses the getDetails method to log the details in the console
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());

// uses the method to update the amount of copies and logs the new book details in the console
book1.updateCopies(-1);
console.log(book1.getDetails());


// Task 2: Creating a Borrower Class

class Borrower { // creates a class named borrower
    constructor(name, borrowerID) {
        // defines the parameters
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = [];   
    };

    borrowBook(book) { // creates a method that will add the book to the empty array of borrowed books
        this.borrowedBooks.push(book);
    };

    returnBook(book) { // this will remove the book from the array, encinuating that the bok is returned
        this.borrowedBooks.pop(book);
    };
};

// creates a new borrower, uses the method to borrow a book, then logs the borrowed books in the console
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

// uses the method to return the great gatsby book, then logs the updated borrowed books array
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);


// Task 3: Creating a Library Class

class Library { // creates a new class called Library
    constructor() {
        this.books = [];
        this.borrowers = [];
    };

    addBook(book) { // creates a method the adds a book to the library
        this.books.push(book);
    };

    listBooks() { // creates a method that return each books details
        this.books.forEach(book => console.log(book.getDetails()));
    };
};

// creates new library, uses method to add a book, the logs the books details in the console
const library = new Library();
library.addBook(book1);
library.listBooks();