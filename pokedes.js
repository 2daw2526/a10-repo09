class PokeDeck {

    constructor(board) {
        this.board = board;
    }
    static vida = 'PS'
    static vida2 = 0;
    static vida3 = 'PS';
    static vida4 = 0;
    static async addCard(tipo, pokemonId = Utils.randomPokemonNumber()) {



        if (tipo == 'player') {

            document.querySelector(".deck").innerHTML += ` 
             <div id="prueba" class ="a${pokemonId}">
            <div class="m-2 card shadow d-inline-block" style="width: 18rem;">
                <img src="#" id="imgPokemon" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-vidaP">${PokeDeck.vida}<h4>
                    <h5 class="card-title">Card title</h5>
                    
                </div>
               
                <ul class="list-group list-group-flush">
                 <p class="habilidad">🔥🔥🔥Habilidades🔥🔥🔥</p>
                    <a class="enlace" href="#" onclick="PokeDeck.ataque(board)"><li class="list-group-item">An item</li></a>
                    <a class="enlace" href="#" onclick="PokeDeck.defensa(board)"><li class="list-group-item">An item</li></a>
                    <a class="enlace" href="#" onclick="#"><li class="list-group-item">An item</li></a>
                </ul>
                <div class="card-body">
                
                <a href="#" onclick="PokeDeck.guardar('pokemon', '${pokemonId}')" class="card-linkCarrito">Añadir Pokemon   </a>
            </div>
                
            </div>
            </div>
            `
            await this.fillCard(pokemonId, 'player');
            console.log(pokemonId + " hey")

        } else if (tipo == 'enemigo') {


            document.querySelector(".deck").innerHTML += ` 
             <div class ="a${pokemonId}">
            <div class="m-2 card shadow d-inline-block" style="width: 18rem;">
                <img src="#" id="imgPokemon" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-vidaE">${PokeDeck.vida3}<h4>  
                    <h5 class="card-title">Card title</h5>
                    
                </div>
               
                <ul class="list-group list-group-flush">
                 <p class="habilidad">🔥🔥🔥Habilidades🔥🔥🔥</p>
                    <a class="enlace" href="#" onclick="PokeDeck.ataque2(board)"><li class="list-group-item">An item</li></a>
                    <a class="enlace" href="#" onclick="PokeDeck.defensa2(board)"><li class="list-group-item">An item</li></a>
                    <a class="enlace" href="#" onclick="#"><li class="list-group-item">An item</li></a>
                </ul>
                
            </div>
            </div>
            `
            await this.fillCard(pokemonId, 'enemigo');
            console.log(pokemonId + " hey")
        }

        /* document.querySelector(".deck").innerHTML += ` 
         <div class ="a${pokemonId}">
        <div class="m-2 card shadow d-inline-block" style="width: 18rem;">
            <img src="#" id="imgPokemon" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
           
            <ul class="list-group list-group-flush">                            copoia de seguridad !!!!!!¡¡¡¡¡¡¡
             <p class="habilidad">🔥🔥🔥Habilidades🔥🔥🔥</p>
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <a href="#" onclick="PokeDeck.removeCard(${pokemonId})" class="card-link">Eliminar Carta</a>
                <a href="#" class="card-linkCarrito">Añadir al carrito</a>
            </div>
        </div>
        </div>
        ` */




    }

    static removeCard(pokemonId) {
        document.querySelector(`.a${pokemonId}`).innerHTML = "";


    }

    static async fillCard(pokemonId, a) {
        // Obtener el mismo número aleatorio para ambas consultas
        console.log(pokemonId + " hola")
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
        let cardElement = document.querySelector(`.a${pokemonId}`);


        let pokemonData = await Utils.PokeApi(url);
        
        let pokemonData2 = await Utils.PokeApi(url2);
        let lista = cardElement.querySelectorAll('.list-group-item');

        // Filtrar para obtener la descripción en español
        let filtro = pokemonData2.flavor_text_entries.find(entry => entry.language.name === "es");

        let pokeInfo = filtro ? filtro.flavor_text : "Descripción no disponible";

        let estadisticas = pokemonData.stats;

        for (let i = 0; i < pokemonData.abilities.length; i++) {
            // Obtener la habilidad actual
            let abilidad = pokemonData.abilities[i].ability;

            // Verificar si el índice está dentro del rango de la lista
            if (i < lista.length) {
                lista[i].innerHTML = abilidad.name; // Asignar el nombre de la habilidad
            } else {
                break; // Salir del bucle si no hay más elementos en la lista
            }
        }

        // Limpiar los elementos restantes de la lista (si los hay)
        for (let i = pokemonData.abilities.length; i < lista.length; i++) {
            lista[i].innerHTML = "";
        }





        if (!cardElement) return; // Si no existe la carta, salir

        cardElement.querySelector('.card-img-top').src = pokemonData.sprites.front_default;
        cardElement.querySelector('.card-title').innerHTML = pokemonData.name;
        
        
        

        if(a == 'player'){
             PokeDeck.vida2 = pokemonData.stats[0].base_stat;
             cardElement.querySelector('.card-vidaP').textContent = `PS: ${PokeDeck.vida2}`;
           
        }else if(a == 'enemigo'){
            PokeDeck.vida4 = pokemonData.stats[0].base_stat;
            cardElement.querySelector('.card-vidaE').textContent = `PS: ${PokeDeck.vida4}`;
            
        }
            /*  cardElement.querySelector('.card-text').innerHTML = pokeInfo; */

        /* for(let i = 0; i < pokemonData.abilities.length; i++){
            lista[i].innerHTML = abilidad.name;
        } */


        console.log(pokemonData.abilities.length);
    }

    static async reloadAllCards() {

    }

    static async addRandomCard() {

    }
    static async aTomarViento() {
        document.querySelector(".deck").innerHTML = "";
    }

    static async ataque(board) {


        const deck = document.querySelector('.deck');

        PokeDeck.vida4 = Math.max(0, PokeDeck.vida4 - 25);
        deck.children[1].querySelector('.card-vidaE').innerHTML = `PS: ${PokeDeck.vida4}`;
    
        console.log('ataque');

        

        setTimeout(function () {
            if( PokeDeck.vida4 == 0){
            
            
                if(Ea == true){
                    enemigo.desaparecer();
                    E = true;
                    board.cells[board.x][board.y] = new Grass();
                }
                if(Eb == true){
                    E1 = true;
                    enemigo1.desaparecer();
                    board.cells[board.x][board.y] = new Grass();
                }
                if(Ec == true){
                    E2 = true;
                    enemigo2.desaparecer();
                    board.cells[board.x][board.y] = new Grass();
                }
                if(Ed == true){
                    E3 = true;
                    enemigo3.desaparecer();
                    board.cells[board.x][board.y] = new Grass();
                }
                if(Ee == true){
                    E4 = true;
                    enemigo4.desaparecer();
                    board.cells[board.x][board.y] = new Grass();
                }
    
                vandera = true
    
            } 
            if(PokeDeck.vida2 == 0){
            
            }else{
                PokeDeck.ataque2();
            }
          }, 500);

          

    }
    static async ataque2() {


        const deck = document.querySelector('.deck');

        PokeDeck.vida2 = Math.max(0, PokeDeck.vida2 - 25);
        deck.children[0].querySelector('.card-vidaP').innerHTML = `PS: ${PokeDeck.vida2}`;
        
        console.log('ataque');

        if(PokeDeck.vida2 == 0){
            vidaMax -=50;
            vandera = true;
        }
       

    }
    static async defensa() {
        const deck = document.querySelector('.deck');

        PokeDeck.vida2 += 10;
        deck.children[0].querySelector('.card-vidaP').innerHTML = `PS: ${PokeDeck.vida2}`;
        
        console.log('curacion');
    }
    static async defensa2() {
        const deck = document.querySelector('.deck');
        // Defensa del enemigo (vida4)
        PokeDeck.vida4 += 10;
        deck.children[1].querySelector('.card-vidaE').innerHTML = `PS: ${PokeDeck.vida4}`;
    }
    static async guardar(clave, id){
        localStorage.setItem(clave, id)
        
        PokeDeck.cargar(clave, id);
    }

    static async cargar(clave, id){
      let s = localStorage.getItem('pokemon');
        const url = `https://pokeapi.co/api/v2/pokemon/${s}`;
        let pokemonCarro = await Utils.PokeApi(url);
        document.getElementById('fotoCarrito').src = pokemonCarro.sprites.front_default;
    }
    static async restablecer(pokemonId,a){
        // Obtener el mismo número aleatorio para ambas consultas
        console.log(pokemonId + " hola")
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
        let cardElement = document.getElementById(`prueba`);


        let pokemonData = await Utils.PokeApi(url);
        
        let pokemonData2 = await Utils.PokeApi(url2);
        let lista = cardElement.querySelectorAll('.list-group-item');

        // Filtrar para obtener la descripción en español
        let filtro = pokemonData2.flavor_text_entries.find(entry => entry.language.name === "es");

        let pokeInfo = filtro ? filtro.flavor_text : "Descripción no disponible";

        let estadisticas = pokemonData.stats;

        for (let i = 0; i < pokemonData.abilities.length; i++) {
            // Obtener la habilidad actual
            let abilidad = pokemonData.abilities[i].ability;

            // Verificar si el índice está dentro del rango de la lista
            if (i < lista.length) {
                lista[i].innerHTML = abilidad.name; // Asignar el nombre de la habilidad
            } else {
                break; // Salir del bucle si no hay más elementos en la lista
            }
        }

        // Limpiar los elementos restantes de la lista (si los hay)
        for (let i = pokemonData.abilities.length; i < lista.length; i++) {
            lista[i].innerHTML = "";
        }





        if (!cardElement) return; // Si no existe la carta, salir

        cardElement.querySelector('.card-img-top').src = pokemonData.sprites.front_default;
        cardElement.querySelector('.card-title').innerHTML = pokemonData.name;
        
        
        

        if(a == 'player'){
             PokeDeck.vida2 = pokemonData.stats[0].base_stat;
             cardElement.querySelector('.card-vidaP').textContent = `PS: ${PokeDeck.vida2}`;
           
        }
            /*  cardElement.querySelector('.card-text').innerHTML = pokeInfo; */

        /* for(let i = 0; i < pokemonData.abilities.length; i++){
            lista[i].innerHTML = abilidad.name;
        } */


        console.log(pokemonData.abilities.length);
    }
    static async borrarCache(){
        localStorage.clear();
        document.getElementById('fotoCarrito').src = 'https://m.media-amazon.com/images/I/61vOBvbsYJL.jpg';
    }



}