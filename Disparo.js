class Shot {
    constructor(x, y, direction, board) {
        this.board = board;
        this.x = x; // La posición X inicial del disparo
        this.y = y; // La posición Y inicial del disparo
        this.direction = direction; // Dirección del disparo (debe ser uno de los valores: UP, DOWN, LEFT, RIGHT)
        this.size = 36; // Tamaño del disparo
        this.speed = 0.2; // Velocidad del disparo
        this.sprite = texture.jugadorAb;
        this.contador = 0;
        
        
    }

    // Método para mover el disparo
    move() {

        if(this.contador == 5){

            console.log(this.contador)


        }else{

        

        let cellX = Math.floor(this.x);
        let cellY = Math.floor(this.y);

        if (cellX >= -1 && cellX < this.board.width && cellY >= -1 && cellY < this.board.height) {



            switch (this.direction) {
                case UP_ARROW:
                    this.y -= this.speed;

                    break;
                case DOWN_ARROW:
                    this.y += this.speed;
                    break;
                case LEFT_ARROW:
                    this.x -= this.speed;
                    this.sprite = texture.gokuAtaque;
                    break;
                case RIGHT_ARROW:
                    this.x += this.speed;
                    this.sprite = texture.gokuAtaqueIz;
                    break;
            }



            /* console.log(this.board.cells); */

            if (cellX == -1 || cellY == -1) {
                this.board.cells[cellX + 1][cellY] = new Grass();

            } else {
                if (this.board.cells[cellX][cellY] instanceof Tree) {

                    this.board.cells[cellX][cellY] = new Grass();
                    // Reemplaza el enemigo con un nuevo objeto Grass



                }
                if (this.board.cells[cellX][cellY].terrain == 'enemigoA') {
                    console.log('odshf')
                    E = true;
                    enemigo.desaparecer();
                    this.board.cells[cellX][cellY] = new Grass();

                }else if (this.board.cells[cellX][cellY].terrain == 'enemigoB') {
                    console.log('odshf')
                    E1 = true;
                    enemigo1.desaparecer();
                    this.board.cells[cellX][cellY] = new Grass();

                }else if (this.board.cells[cellX][cellY].terrain == 'enemigoC') {
                    console.log('odshf')
                    E2 = true;
                    enemigo2.desaparecer();
                    this.board.cells[cellX][cellY] = new Grass();

                }else if (this.board.cells[cellX][cellY].terrain == 'enemigoD') {
                    console.log('odshf')
                    E3 = true;
                    enemigo3.desaparecer();
                    this.board.cells[cellX][cellY] = new Grass();

                }else if (this.board.cells[cellX][cellY].terrain == 'enemigoE') {
                    console.log('odshf')
                    E4 = true;
                    enemigo4.desaparecer();
                    this.board.cells[cellX][cellY] = new Grass();
                }

                /* if( this.board.cells[cellX + 1 ][cellY].valor == 'enemigo'){
                    console.log('hola')
                    this.board.cells[cellX][cellY] = new Grass();
                } */
            }
        }


    }

    }

    // Método para dibujar el disparo en la pantalla
    display() {
        let size = this.size;
        /* if (this.board.cells[cellX][cellY] ) {
            console.log('Le has dado');
        } */
        image(texture.ataque, this.x * size, this.y * size, size, size);




    }
}
