const showLoader = () => {
    const loader = document.querySelector('.loader-wrapper');
    const body = document.querySelector('body');
    loader.style.display = 'block';
    body.style.overflow = 'hidden';
};

const hideLoader = () => {
    const loader = document.querySelector('.loader-wrapper');
    const body = document.querySelector('body');
    loader.style.display = 'none';
    body.style.overflow = 'auto';
};