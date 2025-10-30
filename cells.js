class Cells {
    constructor(terrain, move, valor) {
        this.terrain = terrain;
        this.move = move;
        this.valor = valor;
    }
}
class Grass extends Cells {
    constructor() {
        super("grass", false, 'tierra')
    }

    display(x, y, size) {
        image(texture.grass, x * size, y * size, size, size)
    }
}

class Tree extends Cells {
    constructor() {
        super('tree', false, 'arbol')
    }

    display(x, y, size) {
        image(texture.tree, x * size, y * size, size, size)
    }
}


