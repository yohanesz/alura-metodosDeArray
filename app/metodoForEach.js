const containerBooks = document.getElementById('livros');

function showBooks(bookList) {
    containerBooks.innerHTML = '';

    bookList.forEach((e) => {
      let isAvailable = e.quantidade > 0 ? 'livro_imagem' : 'livro_imagem indisponivel'

        containerBooks.innerHTML += `<div class="livro">
      <img class="${isAvailable}" src="${e.imagem}"
        alt="${e.alt}" />
      <h2 class="livro__titulo">
        ${e.titulo}
      </h2>
      <p class="livro__descricao">${e.autor}</p>
      <p class="livro__preco" id="preco">R$${e.preco}</p>
      <div class="tags">
        <span class="tag">${e.categoria}</span>
      </div>
    </div>`
    });

};


