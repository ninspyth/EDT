const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type=text]');
let searchUrl = '';
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    searchUrl = searchInput.value;
    if (isPhishingWebsite(searchUrl)) {
        document.getElementById('result').innerHTML = 'The Given URL is of a Phishing website';
    }
    else {
        document.getElementById('result').innerHTML = 'The Given URL is a legit website';
    }
});

function isPhishingWebsite(url) {
    const urls = ['https://youtube.com', 'https://vardhaman.org', 'https://cmrcet.ac.in', 'https://web.whatsapp.com', 'https://www.facebook.com', 'https://mail.google.com', 'https://google.com'];
    for (let i = 0; i < urls.length; i++) {
        if (url === urls[i]) {
            return false;
        }
    } 
    console.log('hello');
    return true;
}