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