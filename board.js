class Board {
    constructor(texture) {
        this.width = 35;
        this.height = 18;
        this.size = 36;
        this.cells = new Array(this.width);
        this.ns = Math.floor(random()*10)

        this.x =  Math.floor((this.width / 2));
        this.y =  Math.floor((this.height / 2));

        this.texture = texture;
        

        this.item = null;

        

        for (let i = 0; i < this.width; i++) {
            this.cells[i] = new Array(this.height);
        }

        this.fillRandom();



    }


    fillRandom() {




        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {  //// Esto es para recorrer todo el Array



                this.cells[x][y] = new Tree();
                
           /*  if(random(100) < 5){
                    let nombre = ['espada','lapiz','hacha']
                    let arma = new Weapon(random(nombre),5)
                    this.cells[x][y] = arma;
                    arma.display();
                }  */
                

             }
        }

    }

    display() {

        

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.cells[x][y] && typeof this.cells[x][y].display === 'function') {
                    this.cells[x][y].display(x, y, this.size);
                } else {
                    /* console.error(`Celda en (${x}, ${y}) no tiene la función display.`); */
                }
            }
        }
    
    }
    enemigosOK(){
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++){
                if(this.cells[x][y].terrain == 'enemigo'){
                    console.log('hola');
                    
                }
            }
        }
    }
}