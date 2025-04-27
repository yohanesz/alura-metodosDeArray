const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filteredBooks = category == "disponivel" ? filterByAvailability() : books.filter(book => book.categoria == category);

    showBooks(filteredBooks);

    if (category == 'disponivel') {
        const totalValue = calculateTotalValue(filteredBooks);
        showTotalValue(totalValue);
    }
    
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function showTotalValue(totalValue) {
    totalValueElement.innerHTML = ` <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>`
}