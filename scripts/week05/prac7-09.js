let book1 = new Object();
book1.title = "HTML5";
book1.author = "황기태";
book1.price = 20000;

let book2 = {
    title: "HTML5",
    author: "황기태",
    price: 20000,
};

function Book3(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

let book3 = new Book3("HTML5", "황기태", 20000);

document.writeln(book1.title);
document.writeln(book1.author);
document.writeln(book1.price);
document.write("<br>");
document.writeln(book2.title);
document.writeln(book2.author);
document.writeln(book2.price);
document.write("<br>");
document.writeln(book3.title);
document.writeln(book3.author);
document.writeln(book3.price);
