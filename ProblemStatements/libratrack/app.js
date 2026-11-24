// arrays
console.log("arrays");
const shelf = ["Wings of Fire", "The Alchemist", "Let Us C"]
console.log(shelf);
console.log(shelf.length);
console.log(shelf[0]);
console.log(shelf[(shelf.length)-1]);

shelf.push('Clean Code');
console.log(shelf);
shelf.unshift('Godan');
console.log(shelf);

console.log(shelf.pop());
console.log(shelf.shift());
console.log(shelf);

shelf.splice(0,1,'Malgudi Days');
console.log(shelf);

console.log(shelf.indexOf("Let Us C"));
console.log(shelf.includes("Godan"));

console.log(shelf.slice(0,2));
console.log(shelf);

console.log([...shelf].sort());

console.log(Array.isArray(shelf));

shelf.forEach((item)=>{
    console.log(item);
})

//objects
console.log("objects");
const book={
    id:101,
    title:'Atomic Habits',
    author:'James Clear',
    price:350,
    copies:4,
    publisher:{
        name:'Avery',
        city:'New York City',
    },
    tags:["biography","science"],
    describle:()=>{
        this.author=author
    }
}

book.price=500;
console.log(book.price);

book.isbn='123-5678';
console.log(book);
delete(book.isbn);
console.log(book);

console.log(book.isbn);
console.log(book.price);

console.log(Object.keys(book));
console.log(Object.values(book.publisher));
console.log(Object.entries(book.publisher));

const {title,price}=book;
console.log(title);
console.log(price);

const updated={ ...book, price: 400};
console.log(book.price);
console.log(updated.price);

//funtions
console.log("Functions");
function formatPrice(amount){
    return `Rs ${amount}`;
}
console.log(formatPrice(350));

function calculateLateFee(daysLate, ratePerDay=2){
    return daysLate*ratePerDay;
}
console.log(calculateLateFee(5));
console.log(calculateLateFee(5, 3));

function createBook(id, title, author, category, price, copies, rating){
    let obj_book={
        id:id,
        title:title,
        author: author,
        category: category,
        price: price,
        copies: copies,
        rating: rating
    };
    return obj_book;
}
console.log(createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3));

// array of objects
console.log("array of objects");
function createBook(id, title, author, category, price, copies, rating) {
    let obj_book = {
        id,
        title,
        author,
        category,
        price,
        copies,
        rating
    };
    return obj_book;
}

const library = [
    createBook(101, "Wings of Fire", "A. P. J. Abdul Kalam", "Autobiography", 350, 4, 4.8),
    createBook(102, "The Alchemist", "Paulo Coelho", "Fiction", 299, 2, 4.5),
    createBook(103, "Let Us C", "Yashavant Kanetkar", "Programming", 450, 5, 4.2),
    createBook(104, "Clean Code", "Robert C. Martin", "Programming", 899, 0, 4.7),
    createBook(105, "Godan", "Munshi Premchand", "Fiction", 220, 3, 4.6),
    createBook(106, "Malgudi Days", "R. K. Narayan", "Fiction", 275, 1, 4.4)

];
console.log("library:");
console.log(library);

const titles = library.map(book => book.title);
console.log(titles);

const cheapBooks = library
    .filter(book => book.price < 300)
    .map(book => book.title);
console.log(cheapBooks);

const booktitle = library.find(book => book.id === 104);
console.log(booktitle.title);

const index = library.findIndex(book => book.id === 105);
console.log(index);

const outOfStock = library.some(book => book.copies === 0);
console.log(outOfStock);

const highRated = library.every(book => book.rating > 4);
console.log(highRated);

// library track
console.log("Library track");

function addBook(lib, newBook) {
    return [...lib, newBook];
}

const newBook = createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3);
const updatedLibrary1 = addBook(library, newBook);
console.log(updatedLibrary1);
console.log(library.length);        
console.log(updatedLibrary1.length); 

function removeBook(lib, id) {
    return lib.filter(book => book.id !== id);
}

const updatedLibrary2 = removeBook(library, 103);
console.log(updatedLibrary2);

function borrowBook(lib, id) {
    const book = lib.find(book => book.id === id);
    if (!book) {
        return "Book not found";
    }
    if (book.copies === 0) {
        return `Sorry, ${book.title} is out of stock`;
    }
    book.copies--;
    return `Borrowed: ${book.title} (${book.copies} copies left)`;
}

console.log(borrowBook(library, 101));
console.log(borrowBook(library, 104));
console.log(borrowBook(library, 999));

function searchByAuthor(lib, text) {
    return lib
        .filter(book => book.author.toLowerCase().includes(text.toLowerCase()))
        .map(book => book.title);

}

console.log(searchByAuthor(library, "paulo"));
console.log(searchByAuthor(library, "ROBERT"));

function formatPrice(price) {
    return "₹" + price;
}
function isAvailable(book) {
    return book.copies > 0;
}

function printReport(lib) {
    console.log("ID - Title - Price - Copies - Status");
    lib.forEach(book => {
        let status = isAvailable(book) ? "In stock" : "Out of stock";
        console.log(
            `${book.id} - ${book.title} - ${formatPrice(book.price)} - ${book.copies} - ${status}`
        );
    });
}
printReport(library);