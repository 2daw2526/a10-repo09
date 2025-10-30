
let board, disparo, ant, player, enemigo, enemigo1, enemigo2, enemigo3, enemigo4, arma, movAnterior;
let enemigos = [];
let cortina = 'inicio';
let batallaIniciada = false;
let PlayerVida = 100;
let EnmigoVida = 100;
let Enmigo1Vida = 100;
let Enmigo2Vida = 100;
let Enmigo3Vida = 100;
let Enmigo4Vida = 100;
let vidaMax = 100;
let vidaD = 0;
let vandera = false;
let Ea = false;
let Eb = false;
let Ec = false;
let Ed = false;
let Ee = false;
let carrito = 0;
let enemigoFuera = false;
let E = false;
let E1 = false;
let E2 = false;
let E3 = false;
let E4 = false;



function obtenerFondo() {
  const anchoPantalla = window.innerWidth;

  if (anchoPantalla >= 2000) {
    return "url('../images/fondoGrande.jpg')"; // Fondo para pantallas grandes
  } else if (anchoPantalla >= 900) {
    return "url('../images/fondoPrueba21a9.jpg')"; // Fondo para pantallas medianas
  } else {
    return "url('../images/fondoDefault.jpg')"; // Fondo por defecto (opcional)
  }
}

let fondo = obtenerFondo(); // Inicializar con el fondo correcto


let fondoA = "url('../images/fondoBatalla.jpg')";
let animacionActivada = false;

let tiempoLimite = 35000; // 20 segundos = 20000 milisegundos
let tiempoTranscurrido = 0;

let texture = {
  grass: null,
  tree: null,
  ataque: null,
  jugadorAb: null,
  jugadorAr: null,
  jugadorIz: null,
  jugadorDe: null,

  gokuAtaque: null,
  gokuAtaqueIz: null,

  enemigoAb: null,
  enemigoAr: null,
  enemigoIz: null,
  enemigoDe: null,
}

function preload() {
  texture.grass = loadImage('../images/sueloNormal.png');
  texture.tree = loadImage('../images/arbusto.png');
  texture.ataque = loadImage('../images/attack.png');

  texture.jugadorAb = loadImage('../images/playerAbajo.png');
  texture.jugadorAr = loadImage('../images/playerAr.png');
  texture.jugadorIz = loadImage('../images/playerIz.png');
  texture.jugadorDe = loadImage('../images/playerDe.png');

  texture.gokuAtaque = loadImage('../images/gokuAtaque.png');
  texture.gokuAtaqueIz = loadImage('../images/gokuAtaqueIz.png');

  texture.enemigoAb = loadImage('../images/enemigoAb.png');
  texture.enemigoAr = loadImage('../images/enemigoAr.png');
  texture.enemigoIz = loadImage('../images/enemigoIz.png');
  texture.enemigoDe = loadImage('../images/enemigoDe.png');
}

function setup() {
  let canvas = createCanvas(1260, 648);
  canvas.parent("#game");



  board = new Board(texture);
  mapas = new Mapa(board, texture);
  player = new Player(board, cortina);
  enemigo = new Enemigo(board);
  enemigo1 = new Enemigo(board);
  enemigo2 = new Enemigo(board);
  enemigo3 = new Enemigo(board);
  enemigo4 = new Enemigo(board);
  pokemon = new PokeDeck(board);


  arma = new Weapon(board);
  disparo = new Shot(board);

  for (let x = 1; x <= 5; x++) {
    for (let y = 1; y <= 5; y++) {
      /* console.log('x:', x, 'y:', y) */
    }
  }

  /*  board.fillRandom(); */

  for (let i = 0; i < 1000; i++) {
    mapas.step();
  }


  carrito = localStorage.getItem('pokemon');
  PokeDeck.cargar('pokemon', carrito);


}
function activarAnimacion() {
  const cuerpo = document.querySelector('.cuerpo');

  // Si la animación ya está activa, no hacer nada
  if (animacionActivada) return;

  // Elimina la clase para reiniciar la animación
  cuerpo.classList.remove('fade-in');

  // Fuerza un reflow para reiniciar la animación
  void cuerpo.offsetWidth;

  // Agrega la clase para activar la animación
  cuerpo.classList.add('fade-in');

  // Marca la animación como activada
  animacionActivada = true;
}


function draw() {

  /* background(200) */

  if (cortina == 'inicio') {

    document.getElementById('player').style.display = 'none'
    document.getElementById('enemigo').style.display = 'none'

    document.getElementById('BarraVidaP').style.display = 'none';



    document.getElementById('todo').style.display = 'flex';
    document.getElementById('a').style.display = 'none';
    document.getElementById('Menu').style.display = 'block'
    document.querySelector('.cuerpo').style.backgroundImage = fondo;
    document.body.style.backgroundColor = 'black';
    document.querySelector('.cuerpo').style.backgroundColor = 'black';
    if (!animacionActivada) {
      activarAnimacion();
    }
  }
  if (vidaMax == 0) {
    cortina = 'over'
    console.log('ksdjnf');

  }
  if (cortina == 'juego' || vandera == true) {

    cortina = 'juego';
    vandera = false;
    
    carrito = localStorage.getItem('pokemon');
    if(carrito == null){

    }else{
      PokeDeck.cargar('pokemon', carrito);
    }
    
    PokeDeck.aTomarViento();

    batallaIniciada = false;



    document.getElementById('a').style.display = 'none';
    document.getElementById('player').style.display = 'none'
    document.getElementById('enemigo').style.display = 'none'
    document.getElementById('Menu').style.display = 'none';
    document.querySelector('.cuerpo').style.backgroundImage = 'none';
    document.querySelector('.cuerpo').style.backgroundColor = '#72751b';
    document.getElementById('cartas').style.display = 'none';
    document.getElementById('todo').style.display = 'flex';
    document.getElementById('BarraVidaP').style.display = 'block';
    document.getElementById('BarraVidaP').innerHTML = vidaMax;
    document.getElementById('cartaspol').innerHTML = '';



    board.display();

    player.display(texture);

    enemigo.display('a');
    enemigo1.display('b');
    enemigo2.display('c');
    enemigo3.display('d');
    enemigo4.display('e');

    board.enemigosOK();

  }
  if (cortina == 'ajustes') {



    // https://dragonball-api.com/api/characters

  }
  if (cortina == 'batalla') {



    clear()
    document.getElementById('todo').style.display = 'flex';
    document.getElementById('a').style.display = 'none';
    document.getElementById('player').style.display = 'block'
    document.getElementById('enemigo').style.display = 'block'

    document.getElementById('cartas').style.display = 'block';

    document.getElementById('game').style.display = 'block'
    /* document.querySelector('.cuerpo').style.backgroundImage = fondoA; */

    document.getElementById('player').style.backgroundImage = "url('../images/goku_normal.webp')";
    document.getElementById('enemigo').style.backgroundImage = "url('../images/cellBatalla.webp')";

    document.body.style.backgroundColor = '#4ca975';
    document.querySelector('.cuerpo').style.backgroundColor = 'transparent';

    if (!batallaIniciada) {
      PokeDeck.addCard('player');
      setTimeout(function () {
        PokeDeck.addCard('enemigo');
      }, 2000);
      // Ejecuta addCard() solo una vez
      batallaIniciada = true; // Marca la batalla como iniciada
    }

    document.getElementById('BarraVidaP').style.display = 'block';




  }
  if (cortina == 'over') {
    document.getElementById('player').style.display = 'none'
    document.getElementById('enemigo').style.display = 'none'
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('todo').style.display = 'none';
    document.getElementById('d').style.display = 'none';
    document.getElementById('a').style.display = 'block';
    setTimeout(function () {
      location.reload();;
    }, 2000);
  }
  if (E == true && E1 == true && E2 == true && E3 == true && E4 == true) {
    cortina = 'victoria';
  }
  if (cortina == 'victoria') {
    document.getElementById('player').style.display = 'none'
    document.getElementById('enemigo').style.display = 'none'
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('todo').style.display = 'none';
    document.getElementById('d').style.display = 'none';
    document.getElementById('a').style.display = 'none';
    document.getElementById('y').style.display = 'blockd';

    setTimeout(function () {
      location.reload();;
    }, 2000);

  }






}

function keyPressed() {
  console.log("Has presionado: " + keyCode);


  if (keyCode == 13) {
    console.log('hola')
    cortina = 'juego';
    batallaIniciada = false;

  }
  if (keyCode == 80) {
    cortina = 'inicio';
    animacionActivada = false; // Reiniciar la variable de control
    activarAnimacion(); // Activar la animación al volver al inicio
  }
  if (keyCode == 192) {
    cortina = 'batalla';
  }


  // Guardar el keyCode anterior



  // Llamada a la función de movimiento del jugador
  player.move(keyCode);

  // Mover los enemigos
  enemigo.move('a');
  enemigo1.move('b');
  enemigo2.move('c');
  enemigo3.move('d');
  enemigo4.move('e');


  // Si presionas la tecla 'R' (keyCode 82), realiza una acción de disparo
  if (keyCode == 82) {
    player.disparo(keyCode);
    console.log('Disparo realizado');
  }
  if (keyCode == 34) {
    cortina = 'over';
  }


  // el 13 es enter


}

