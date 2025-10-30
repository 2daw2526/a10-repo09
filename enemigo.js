class Enemigo {
    constructor(board) {

        this.board = board;


        this.seguir = true;

        this.x = floor(random() * 10);
        this.y = floor(random() * 10);



        this.up = false;
        this.down = false;
        this.left = false;
        this.rigt = false;
        this.sprite = texture.enemigoAb;

        this.mostrar();


    }

    mostrar() {
        this.seguir = true;
    }

    desaparecer() {
        this.seguir = false;
    }

    move() {

        if (!this.seguir) return;

        let movimiento = floor(random() * 4)



        switch (movimiento) {



            case 0:
                this.board.cells[this.x][this.y].terrain = 'grass';
                if (this.y != 0 && this.board.cells[this.x][this.y - 1] instanceof Grass) {
                    this.movAnterior = UP_ARROW
                    this.sprite = texture.enemigoAr;
                    this.y--;

                } else if (this.y == 0 && !(this.board.cells[this.x][this.y - 1] instanceof Grass)) {

                    if (this.board.cells[this.x][this.board.height - 1] instanceof Tree) {
                        this.sprite = texture.enemigoAr;
                        this.movAnterior = UP_ARROW
                    } else {
                        this.sprite = texture.enemigoAr;
                        this.movAnterior = UP_ARROW
                        this.y = this.board.height - 1;
                    }

                }
                break;
            case 1:
                this.board.cells[this.x][this.y].terrain = 'grass';
                if (this.y < this.board.height - 1 && this.board.cells[this.x][this.y + 1] instanceof Grass) {
                    this.sprite = texture.enemigoAb;
                    this.y++;
                    this.movAnterior = DOWN_ARROW;

                } else if (this.y == this.board.height - 1 && !(this.board.cells[this.x][this.y + 1] instanceof Grass)) {
                    console.log("Funciona")
                    if (this.board.cells[this.x][0] instanceof Tree) {
                        this.sprite = texture.enemigoAb
                        this.movAnterior = DOWN_ARROW;

                    } else {
                        this.sprite = texture.enemigoAb;
                        this.y = 0;
                        this.movAnterior = DOWN_ARROW;
                    }


                }
                break;
            case 2:
                this.board.cells[this.x][this.y].terrain = 'grass';
                if (this.x != 0 && this.board.cells[this.x - 1][this.y] instanceof Grass) {
                    this.sprite = texture.enemigoIz;
                    this.x--;
                    this.movAnterior = LEFT_ARROW;


                } else if (this.x == 0 && this.board.cells[this.x][this.y] instanceof Grass) {

                    if (this.board.cells[this.board.width - 1][this.y] instanceof Tree) {
                        this.sprite = texture.enemigoIz;
                        this.movAnterior = LEFT_ARROW;
                    } else {
                        this.sprite = texture.enemigoIz;
                        this.x = this.board.width - 1;
                        this.movAnterior = LEFT_ARROW;
                    }


                }
                break;

            case 3:
                this.board.cells[this.x][this.y].terrain = 'grass';

                if (this.x < this.board.width - 1 && this.board.cells[this.x + 1][this.y] instanceof Grass) {

                    this.sprite = texture.enemigoDe;
                    this.x++;
                    this.movAnterior = RIGHT_ARROW;

                } else if (this.x === this.board.width - 1 && this.board.cells[0][this.y] instanceof Grass) {

                    if (this.board.cells[0][this.y] instanceof Tree) {
                        this.sprite = texture.enemigoDe;
                        this.movAnterior = RIGHT_ARROW;
                    } else {
                        this.sprite = texture.enemigoDe;
                        this.x = 0;
                        this.movAnterior = RIGHT_ARROW;
                    }


                }
                break;


        }


        /* if (this.board.cells[this.x][this.y] == 0) {
            
            this.board.cells[this.x][this.y] = 1;  esto es para pintar en negro donde se mueva y pintar en blanco donde este en negro
        } else {
            this.board.cells[this.x][this.y] = 0;
        }
 */
        


    }
    vuelveAparecer() {
        do {
            this.x = floor(random() * 10);
            this.y = floor(random() * 10);
        } while (this.board.cells[this.x][this.y] instanceof Tree == true) // si ponemos Grass en ves de Tree hace un efecto raro

    }

    batalla(){
        
    }


    display(indentificador) {

        let size = 36



        if (!this.seguir) return;

        if (this.board.cells[this.x][this.y] instanceof Tree) {
            this.vuelveAparecer()
        } else {

            switch (indentificador) {

                case 'a':
                    this.board.cells[this.x][this.y].terrain = 'enemigoA';
                    image(this.sprite, this.x * size, this.y * size, size, size);
                    break;

                case 'b':
                    this.board.cells[this.x][this.y].terrain = 'enemigoB';
                    image(this.sprite, this.x * size, this.y * size, size, size);
                    break;

                case 'c':
                    this.board.cells[this.x][this.y].terrain = 'enemigoC';
                    image(this.sprite, this.x * size, this.y * size, size, size);
                    break;

                case 'd':
                    this.board.cells[this.x][this.y].terrain = 'enemigoD';
                    image(this.sprite, this.x * size, this.y * size, size, size);
                    break;

                case 'e':
                    this.board.cells[this.x][this.y].terrain = 'enemigoE';
                    image(this.sprite, this.x * size, this.y * size, size, size);
                    break;


            }





            /* this.board.cells[this.x][this.y].terrain = 'enemigo';
            image(this.sprite, this.x * size, this.y * size, size, size ) */

        }

    }

}