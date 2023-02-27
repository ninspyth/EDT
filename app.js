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
    const features = {
        isatpresent: function () {
            for (let i = 0; i < url.length; i++) {
                if (url[i] === '@') {
                    console.log(url.length);
                    return true;
                }
                else { 
                    return false;
                }
    
            }

        }
    };
    for (x in features) {
        if (x) {
            return true;
        }
        else {
            return false; 
        }
    }
    
}