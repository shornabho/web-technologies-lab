const rupeeFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR'
});

const intlNumberFormatter = Intl.NumberFormat('en-us');

const americanDateFormatter = Intl.DateTimeFormat('en-us', {
    month: "long",
    day: "numeric",
    year: "numeric"
});

const createStarRatingHTML = (starRating) => {
    let htmlContent = '';
    let i = 1;
    for (i = 1; i <= starRating; i++) {
        htmlContent += `<i class="bi bi-star-fill"></i>`;
    }
    i--;
    if (i < 5 && (i % 1) == 0) {
        htmlContent += `<i class="bi bi-star-half"></i>`;
        i++;
    }
    for (; i < 5; i++) {
        htmlContent += `<i class="bi bi-star"></i>`;
    }
    return htmlContent;
};