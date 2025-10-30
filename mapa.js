class Mapa {
    constructor(board, texture) {
        this.board = board;
        this.x = Math.floor((this.board.width / 2));
        this.y = Math.floor((this.board.height / 2));
        this.texture = texture;
        this.direction = Math.floor(Math.random() * 4); // 0: arriba, 1: derecha, 2: abajo, 3: izquierda
        this.raro = Math.floor(random() * 2);
        this.contador = 0;
        this.finalizado = false;
        this.ns = Math.floor(random() * 10)
    }

    step() {
        const limite = 1000;

        if (this.finalizado) {
            return; // Si ya terminó, no hace nada
        }

        
        if (this.board.cells[this.x][this.y] instanceof  Tree) {
            if (Math.random() < 0.5) {
                this.turnLeft();
            } else if (this.raro == 1) {
                this.turnRight();
            }
            this.board.cells[this.x][this.y] =  new Grass(); 
        } else {
            if (Math.random() < 0.5) {
                this.turnLeft();
            } else {
                this.turnRight();
            }
            this.board.cells[this.x][this.y] = new Grass();
        }

        switch (this.direction) {
            case 0:
                this.y--;
                break;
            case 1:
                this.x++;
                break;
            case 2:
                this.y++;
                break;
            case 3:
                this.x--;
                break;
        }

        // Asegura que la hormiga no se salga del tablero
        if (this.x >= this.board.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = this.board.width - 1;
        }
        if (this.y >= this.board.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = this.board.height - 1;
        }

        this.contador++;

        if (this.contador >= limite) {
            this.finalizado = true; // Marca que ya no debe ejecutar más pasos
        }
    }

    turnLeft() {
        this.direction--;

        if (this.direction == -1) {
            this.direction = 3;
        }
    }

    turnRight() {
        this.direction++;

        if (this.direction == 4) {
            this.direction = 0;
        }
    }
    
}