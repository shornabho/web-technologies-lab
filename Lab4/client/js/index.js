
const constructBookTileElement = (book) => {
    const bookElement = document.createElement('a');
    bookElement.className = 'book';
    bookElement.setAttribute('href', `./book.html?id=${book._id}`);
    let bookHtml = `<img src="${book.bookImages?.frontCover}" alt="" class="book-cover">
            <h2 class="book-title">${book.title}</h2>
            <h3 class="book-author">${book.author}</h3>
            <small class="book-type">${book.bindingType}</small>
            <h4 class="book-discounted-price">${rupeeFormatter.format(book.sellingPrice)}</h4>
            <div class="book-rating amazon-yellow">`;
    let i = 1;
    for (i = 1; i <= book.starRating; i++) {
        bookHtml += `<i class="bi bi-star-fill"></i>`;
    }
    i--;
    if (i < 5 && (i % 1) == 0) {
        bookHtml += `<i class="bi bi-star-half"></i>`;
        i++;
    }
    for (; i < 5; i++) {
        bookHtml += `<i class="bi bi-star"></i>`;
    }
    bookHtml += `</div>`;

    bookElement.innerHTML += bookHtml;

    return bookElement;
};

document.addEventListener('DOMContentLoaded', async (e) => {
    const booksGallery = document.querySelector('.books-gallery');

    let books = await fetch('http://localhost:5000/api/books')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));

    console.log(books);

    books.forEach(book => {
        booksGallery.appendChild(constructBookTileElement(book));
    });
});