class Loot{

    constructor(){
        this.items = [];
        

    }

    addItem(item){
        this.items.push(item);
    }

    display(){
        console.log('inventario');
        let suma = 0;
        let armas = 0;
        let pociones = 0;

        for(let i = 0; i < this.items.length; i++){

            if(this.items[i] instanceof Weapon){
                armas++;
            }else if(this.items[i] instanceof Potion){
                pociones++;
            }

            suma += this.items[i].weight;
            /* console.log(this.items[i].name);
            console.log(`El inventario pesa: ${suma} kgs`);
            console.log(`Hay ${armas} Weapon y hay ${pociones} pociones`) */
        }
    }

    deleteItem(item){
        let index = this.items.findIndex(item);
        this.items.splice(index,1);
    }
}