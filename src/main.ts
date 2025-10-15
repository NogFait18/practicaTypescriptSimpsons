/* FetchSimpson y mostrar a los usuarios */
const main = document.getElementById("main") as HTMLElement
const btnCarga = document.getElementById('carga') as HTMLElement
const divError = document.getElementById('error') as HTMLElement
const loader = document.getElementById('loader') as HTMLElement
const personajes = document.getElementById('personajes') as HTMLElement
const error = document.getElementById('error') as HTMLElement

const apiUrl: string = "https://thesimpsonsapi.com/api/characters "


function showLoading():void{
    //Muestra el indicador de carga
    loader.classList.add('loadingActive')
    //Limpia los personajes cuando aparece el loader
    personajes.innerHTML = ``
}

function hideLoading():void{
    //Oculta el indicador de carga
    loader.classList.remove('loadingActive')
}

function showError(message:string):void{
        //Muestra mensaje de error al usuario
        //Oculta el error automáticamente después de 5 segundos con un setTimeout
        const div = document.createElement('div')
        setTimeout(()=>{
            div.remove()
        },5000)
        div.innerHTML = `
        <div class="error" id="error">
            <h3>${message}</h3>
        </div>`
        error.appendChild(div)
        hideLoading()
}

function createCharacterCard(character: SimpsonCharacter): HTMLElement {
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


const renderCharacters = (characters:SimpsonCharacter[]):void=>{
    characters.forEach(character => {
    /* Mostrar datos en pantalla */
        const cartaCreada = createCharacterCard(character)
        personajes.appendChild(cartaCreada)
    });
}

async function fetchCharacters():Promise<void> {
    /*  Mostrar loading 
        ○ Hacer fetch a la API 
        ○ Verificar que la respuesta sea exitosa (response.ok) 
        ○ Parsear JSON 
        ○ Hace uso de renderCharacters 
        ○ Ocultar loading 
        ○ Manejar errores con try/catch 
        ○ Mostrar mensaje de error si algo falla  
    */
    try{
        const response = await fetch(apiUrl)
        if(!response.ok){
            showError(`HTTP error! Status: ${response.status}`)
        }

        const data:IrespuestaApi = await response.json()
        renderCharacters(data.results)
        hideLoading()
    }catch (error) {
        showError("No se han encotrado los datos")
    }
}

//Evento con boton para cargar a los personajes
btnCarga?.addEventListener('click',()=>{
    showLoading()
    setTimeout(()=>{
        fetchCharacters()
    },2000)
})





interface IrespuestaApi{
    results:SimpsonCharacter[]
}

interface SimpsonCharacter{
    portrait_path:string,
    name:string,
    occupation:string
    age:number,
    status:string,
    phrases:string[]
}










