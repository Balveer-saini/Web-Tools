//uppercase --
document.querySelector('.uppercase').addEventListener('click',uppercase)

function uppercase(text){
    text = document.querySelector('.textarea').value;
    let uppercase = text.toUpperCase();
    document.querySelector('.textarea').value = uppercase;
}

document.querySelector('.lowercase').addEventListener('click',lowercase)
function lowercase(text){
    text = document.querySelector('.textarea').value;
    let lowercase = text.toLowerCase();
    document.querySelector('.textarea').value = lowercase;
}

