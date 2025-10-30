class Utils{
    

    static randomPokemonNumber(){
        return  (Math.floor(Math.random() * 1024) + 1)  
    }

    static async PokeApi(url){
        const response = await fetch(url);
            if (!response.ok) {
                console.error('ERROR fetching data');
                return null;
            } else {
                return await response.json();
            }
    }
}