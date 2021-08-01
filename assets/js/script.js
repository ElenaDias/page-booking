// Funzione per il tab
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "  .tab button   ");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active ";
}
// Funzione per il bottone di validazione del form che fa scomparire tutto e mostra un messaggio, esempio: Grazie
var form = document.getElementById('form');

form.addEventListener(('submit'), 
    function (e) {
    e.preventDefault();
    let nome = document.getElementById('input_name');
    let cognome = document.getElementById('input_surname');
    let email = document.getElementById('input_email');
    let error = document.getElementById('error');
    let message = document.getElementById('message');
    email.style.border = "none";
    nome.style.border = "none";
    cognome.style.border = "none";
    error.innerHTML = "";
    if (email.value == "") {
        error.innerHTML = ' * Attention. Fill all the fields';
        email.focus();
        email.style.border = "3px solid red";
        return false
    }
    if(nome.value == ""){
        error.innerHTML = ' * Attention. Fill all the fields';
        nome.focus();
        nome.style.border = "3px solid red";
        return false
    }
    if (cognome.value == ""){
        error.innerHTML = ' * Attention. Fill all the fields';
        cognome.focus();
        cognome.style.border = "3px solid red"
        return false
    }

    form.style.display = "none";
    message.style.display = "block";
    message.classList.add("message");
    message.innerHTML = "Thank you for your time, we'll answer as soon as possible. ";
    return true;
})

// al click del burger menu (navbar verticale che compare e scompare)
const burgerMenu = document.querySelector('#burger-menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', function(){
    navbar.classList.toggle('change');
});