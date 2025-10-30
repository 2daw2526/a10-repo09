class Player {
    constructor(board, cortina) {

        this.board = board;


        this.x = Math.floor((this.board.width / 2));

        this.y = Math.floor((this.board.height / 2));

        this.cortina = cortina;

        this.contador = 0;
        this.up = false;
        this.down = false;
        this.left = false;
        this.rigt = false;
        this.sprite = texture.jugadorAb;
        this.sprite2 = texture.ataque;

        this.inventory = new Loot();
        this.shots = [];
        this.movAnterior = null;
        // Item = new Potion('health'))
        // relleno con item random

        let item = new Weapon('espada', 6);

        for (let i = 0; i < 10; i++) {

            if (random(100) < 50) {
                this.inventory.addItem(item);
            } else {
                this.inventory.addItem(new Potion('healing'));
            }
        }
        this.inventory.display()


    }

    move(code) {

        if  (this.board.cells[this.x][this.y].terrain == 'enemigoA'){
            cortina = 'batalla';
            Ea = true;
        }else if (this.board.cells[this.x][this.y].terrain == 'enemigoB'){
            cortina = 'batalla';
            Eb = true;
        }else if (this.board.cells[this.x][this.y].terrain == 'enemigoC'){
            cortina = 'batalla';
            Ec = true;
        }else if (this.board.cells[this.x][this.y].terrain == 'enemigoD'){
            cortina = 'batalla';
            Ed = true;
        }else if (this.board.cells[this.x][this.y].terrain == 'enemigoE'){
            cortina = 'batalla';
            Ee = true;
        }

        switch (code) {



            case UP_ARROW:
                this.sprite = texture.jugadorAr;
                this.movAnterior = UP_ARROW;
                if (this.y != 0 && this.board.cells[this.x][this.y - 1] instanceof Grass) {

                    this.y--;

                } else if (this.y == 0 && !(this.board.cells[this.x][this.y - 1] instanceof Grass)) {

                    if (this.board.cells[this.x][this.board.height - 1] instanceof Tree) {

                    } else {

                        this.y = this.board.height - 1;
                    }

                }
                break;
            case DOWN_ARROW:
                this.sprite = texture.jugadorAb;
                this.movAnterior = DOWN_ARROW;
                if (this.y < this.board.height - 1 && this.board.cells[this.x][this.y + 1] instanceof Grass) {
                    this.y++;


                } else if (this.y == this.board.height - 1 && !(this.board.cells[this.x][this.y + 1] instanceof Grass)) {
                    console.log("Funciona")
                    if (this.board.cells[this.x][0] instanceof Tree) {


                    } else {
                        this.y = 0;

                    }


                }
                break;
            case LEFT_ARROW:
                this.sprite = texture.jugadorIz;
                this.movAnterior = LEFT_ARROW;
                if (this.x != 0 && this.board.cells[this.x - 1][this.y] instanceof Grass) {
                    this.x--;



                } else if (this.x == 0 && this.board.cells[this.x][this.y] instanceof Grass) {

                    if (this.board.cells[this.board.width - 1][this.y] instanceof Tree) {

                    } else {

                        this.x = this.board.width - 1;

                    }


                }
                break;

            case RIGHT_ARROW:
                this.sprite = texture.jugadorDe;
                this.movAnterior = RIGHT_ARROW;
                if (this.x < this.board.width - 1 && this.board.cells[this.x + 1][this.y] instanceof Grass) {

                    this.x++;


                } else if (this.x === this.board.width - 1 && this.board.cells[0][this.y] instanceof Grass) {

                    if (this.board.cells[0][this.y] instanceof Tree) {

                    } else {

                        this.x = 0;

                    }


                }
                break;

        }

           



    }


    display() {
        let size = this.board.size;
        image(this.sprite, this.x * size, this.y * size, size, size);

        // Mostrar todos los disparos
        for (let shot of this.shots) {
            shot.move();  // Mover el disparo
            shot.display();  // Mostrar el disparo
        }
    }

    KLK(code) {
        if (this.movAnterior == RIGHT_ARROW && code == 82) {
            this.sprite = texture.gokuAtaqueIz;
        }
    }

    disparo(code) {
        if (code == 82) {
            if (!this.movAnterior) {
                console.error("Error: movAnterior es undefined");
                return;
            }

            if (this.contador == 5) {

                console.log('Ya no puedes disparar')

            } else {


                if (this.movAnterior == RIGHT_ARROW) {
                    this.sprite = texture.gokuAtaqueIz;
                } else if (this.movAnterior == LEFT_ARROW) {
                    this.sprite = texture.gokuAtaque;
                }

                let newShot = new Shot(this.x, this.y, this.movAnterior, this.board, this.cells);
                this.shots.push(newShot);

                this.contador += 1;

                console.log("Disparo hacia: ", this.movAnterior);

            }
        }
    }

}    