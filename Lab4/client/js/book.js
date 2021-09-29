const parseQueryParams = () => {
    const paramsStr = window.location.search.replace('?', '').split('&');
    const params = {};
    paramsStr.forEach(paramStr => {
        const keyValue = paramStr.split('=');
        const key = keyValue[0];
        const value = keyValue[1];
        params[key] = value;
    });

    return params;
};

const getBookData = async (bookId) => {
    let book = await fetch(`http://localhost:5000/api/books/${bookId}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));

    return book;
};

document.addEventListener('DOMContentLoaded', async (e) => {
    showLoader();

    const params = parseQueryParams();
    const id = params.id;

    let book = await getBookData(id);
    console.log(id);
    console.log(book);

    // Main Book Info
    const coverImage = document.querySelector('#book-info .left-column .cover-image');
    const otherImages = document.querySelector('#book-info .left-column .other-book-images');
    const title = document.querySelector('#book-info .center-column .title');
    const subtitle = document.querySelector('#book-info .center-column .subtitle');
    const author = document.querySelector('#book-info .center-column .author .author-name');
    const numberOfRatings = document.querySelector('#book-info .center-column .ratings .number-of-ratings');
    const starRating = document.querySelector('#book-info .center-column .ratings .star-rating');
    const mrp = document.querySelector('#book-info .center-column .price-list .mrp > .value');
    const sellingPrice = document.querySelector('#book-info .center-column .price-list .selling-price > .value');
    const savingsPlan = document.querySelector('#book-info .center-column .price-list .savings-plan > .value');
    const bindingType = document.querySelector('#book-info .center-column .price-list .binding-type > .value ');
    const description = document.querySelector('#book-info .center-column .description');

    coverImage.innerHTML = `<img src="${book?.bookImages?.frontCover}" alt="">`;

    otherImages.innerHTML = '';
    book?.bookImages?.otherImages.forEach(imageUrl => {
        otherImages.innerHTML += `<img src="${imageUrl}" alt="" class="other-image">`;
    });

    title.innerHTML = book.title;
    subtitle.innerHTML = book.subtitle;
    author.innerHTML = book.author;
    numberOfRatings.innerHTML = intlNumberFormatter.format(book.numberOfRatings);
    starRating.innerHTML = createStarRatingHTML(book.starRating);
    mrp.innerHTML = rupeeFormatter.format(book.mrp);
    sellingPrice.innerHTML = rupeeFormatter.format(book.sellingPrice);

    const discountAmount = book.mrp - book.sellingPrice;
    const discountPercentage = Math.round(((discountAmount / book.mrp) + Number.EPSILON) * 100) / 100;
    savingsPlan.innerHTML = `${rupeeFormatter.format(discountAmount)} (${discountPercentage})`;

    bindingType.innerHTML = book.bindingType;

    description.innerHTML = book.description;


    // Book Metadata
    const printLength = document.querySelector('#book-info .center-column .meta-data-container .meta-data.print-length > .value');
    const language = document.querySelector('#book-info .center-column .meta-data-container .meta-data.language > .value');
    const publisher = document.querySelector('#book-info .center-column .meta-data-container .meta-data.publisher > .value');
    const publicationDate = document.querySelector('#book-info .center-column .meta-data-container .meta-data.publication-date > .value');
    const dimensions = document.querySelector('#book-info .center-column .meta-data-container .meta-data.dimensions > .value');
    const isbn10 = document.querySelector('#book-info .center-column .meta-data-container .meta-data.isbn-10 > .value');
    const isbn13 = document.querySelector('#book-info .center-column .meta-data-container .meta-data.isbn-13 > .value');

    printLength.innerHTML = `${book.numberOfPages} pages`;
    language.innerHTML = book.language;
    publisher.innerHTML = book.publisher;
    publicationDate.innerHTML = americanDateFormatter.format(new Date(book.datePublished));
    dimensions.innerHTML = `${book.dimensions.length} x ${book.dimensions.breadth} x ${book.dimensions.height} ${book.dimensions.unit}`;
    isbn10.innerHTML = book.isbn10;
    isbn13.innerHTML = book.isbn13;

    hideLoader();
    console.log(printLength.innerHTML);
});