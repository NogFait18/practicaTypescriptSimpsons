"use strict";
/* FetchSimpson y mostrar a los usuarios */
const main = document.getElementById("main");
const btnCarga = document.getElementById('carga');
const divError = document.getElementById('error');
const loader = document.getElementById('loader');
const personajes = document.getElementById('personajes');
const error = document.getElementById('error');
const apiUrl = "https://thesimpsonsapi.com/api/characters ";
function showLoading() {
    //Muestra el indicador de carga
    loader.classList.add('loadingActive');
    //Limpia los personajes cuando aparece el loader
    personajes.innerHTML = ``;
}
function hideLoading() {
    //Oculta el indicador de carga
    loader.classList.remove('loadingActive');
}
function showError(message) {
    //Muestra mensaje de error al usuario
    //Oculta el error automáticamente después de 5 segundos con un setTimeout
    const div = document.createElement('div');
    setTimeout(() => {
        div.remove();
    }, 5000);
    div.innerHTML = `
        <div class="error" id="error">
            <h3>${message}</h3>
        </div>`;
    error.appendChild(div);
    hideLoading();
}
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.classList.add('character-card');
    card.innerHTML = `
        <img src="https://cdn.thesimpsonsapi.com/500${character.portrait_path}" alt="${character.name}">
        <h2>${character.name}</h2>
        <h3>${character.occupation}</h3>
        <div class="character-info">
            <span>Age: ${character.age}</span>
            <span>${character.status}</span>
        </div>
        <p>${character.phrases?.[1] || ''}</p>
    `;
    return card;
}
const renderCharacters = (characters) => {
    characters.forEach(character => {
        /* Mostrar datos en pantalla */
        const cartaCreada = createCharacterCard(character);
        personajes.appendChild(cartaCreada);
    });
};
async function fetchCharacters() {
    /*  Mostrar loading
        ○ Hacer fetch a la API
        ○ Verificar que la respuesta sea exitosa (response.ok)
        ○ Parsear JSON
        ○ Hace uso de renderCharacters
        ○ Ocultar loading
        ○ Manejar errores con try/catch
        ○ Mostrar mensaje de error si algo falla
    */
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            showError(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        renderCharacters(data.results);
        hideLoading();
    }
    catch (error) {
        showError("No se han encotrado los datos");
    }
}
//Evento con boton para cargar a los personajes
btnCarga?.addEventListener('click', () => {
    showLoading();
    setTimeout(() => {
        fetchCharacters();
    }, 2000);
});
