class Item{

    // new Weapon('espada',6)
    // new Potion('healing')

    constructor(name,peso,board){

        this.name = name;
        this.peso = peso;
        this.board = board;

        
    }


}

class Potion extends Item{

    constructor(name){
        super(name,1);
        this.emoji = "🍼";
    }


}

class Weapon extends Item{

    constructor(name,peso,board){
        super(name,peso,board);
        this.emoji = "🔫";
    }
    display(){
        let size = 32;

        let x = floor(random() * 38 / 2 + 10);
        let y = floor(random() * 22 / 2 + 10);

        text(this.emoji, x* size, y* size, size, size)
    }
}