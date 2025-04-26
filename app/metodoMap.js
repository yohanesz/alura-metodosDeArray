function applyDiscount(books) {
    const discount = 0.3;

    const booksOnSale = books.map((book) => {
        return { ...book, preco: (book.preco - (book.preco * discount)).toFixed(2) };
    });

    return booksOnSale;
}
