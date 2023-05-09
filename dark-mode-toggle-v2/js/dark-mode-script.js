let navBar = document.querySelector('.navbar');
let darkMode = document.querySelector('#dark-mode-icon');
let body = document.body;

// Verificar se o usuário já salvou o estado do modo escuro
if (localStorage.getItem('dark-mode') === 'enabled') {
navBar.classList.add('dark-nav');
body.classList.add('dark-mode');
}

darkMode.addEventListener('click', () => {
navBar.classList.toggle('dark-nav');
body.classList.toggle('dark-mode');

// Salvar o estado do modo escuro na localStorage
if (body.classList.contains('dark-mode')) {
localStorage.setItem('dark-mode', 'enabled');
} else {
localStorage.setItem('dark-mode', 'disabled');
}
});