// Variables 
const jokeBtn = document.getElementById('joke-btn');
const displayJoke = document.getElementById('joke');

// Functions
function generateJoke(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                displayJoke.innerHTML = JSON.parse(this.responseText).value;
            } else {
                displayJoke.innerHTML = 'Something Went Wrong (Not Funny)';
            }
        }
    };

    xhr.send();
};

// Event Listeners
jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);