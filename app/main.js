

let books = [];
const endpointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getBooksAPI() {
    const res = await fetch(endpointAPI);
    books = await res.json();
    let booksOnSale = applyDiscount(books);
    
    showBooks(booksOnSale);
}

getBooksAPI();
