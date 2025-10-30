/* class Board {
    constructor(texture) {
        this.width = 20;
        this.height = 20;

        this.texture = texture;
        this.cells = new Array(this.width);
        this.size = 32

        for (let i = 0; i < this.width; i++) {
            this.cells[i] = new Array(this.height);
        }





    }


    fillRandom() {




        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {  //// Esto es para recorrer todo el Array

                this.cells[x][y] = floor(random() * 10);
            }
        }

    }

    display() {

        let size = 4;

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {

                /* stroke(); */
                /* let mapa = null;

                if(this.cells[x][y] <= 7){
                    mapa = 0;

                }else{
                    mapa = 1;
                }

                if (this.cells[x][y] != mapa ) {
                    image(this.texture.grass, x * this.size, y * this.size, this.size, this.size)

                }else{
                    image(this.texture.stump, x * this.size, y * this.size, this.size, this.size)

                }
                console.log(mapa);

                //square(x * this.size, y * this.size, this.size);



            }
        }

    }

} */