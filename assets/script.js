const form = document.querySelector('form');
let nombre = document.getElementById('nombre');

function Borrar(){
    document.getElementById('vista').classList.remove('vista');
    document.getElementById('vista').classList.add('hidde');
}

form.addEventListener('submit', e => {
	e.preventDefault()
    if (nombre.value == ''){
        document.getElementById('button-container').classList.add('hidde')
        document.getElementById('vista').classList.remove('hidde');
        document.getElementById('vista').classList.add('vista');
        nombre.value = 'Por Favor Ingrese Un Nombre De Usuario'
        document.getElementById('link').innerText = (`${nombre.value}`);
        nombre.value = ''
        setTimeout(Borrar,3000);
    }else {
        document.getElementById('vista').classList.remove('hidde');
        document.getElementById('button-container').classList.remove('hidde')
        document.getElementById('vista').classList.add('vista');
        document.getElementById('link').innerText = (`https://${nombre.value}.github.io/vacaciones-cody`);
        document.getElementById('button').href =  (`https://${nombre.value}.github.io/vacaciones-cody`);
        nombre.value = ''
    };
});