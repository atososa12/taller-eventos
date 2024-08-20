document.querySelector('div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});
document.querySelector('button').addEventListener('click', function(event) {
    event.stopPropagation();  
    alert('¡Botón clickeado!');
});
