const book = {
    author: 'Charlotte Bronte',
    pages: 400,
    publishers: [
        {
            publishername: 'publisher1',
        },
        {
            publishername: 'publisher2',
        },
    ],
};

const { pages, author, ...ditto } = book; // ditto is the rest of the object, no matter how many properties it has

//   console.log(pages); // => Charlotte Bronte
console.log(ditto);
// => { pages: 400, publishers: [ { name: 'publisher1' }, { name: 'publisher2' } ] }

// Example with pokemon sprites
const pokemon = {
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        back_female: null,
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
        back_shiny_female: null,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
        front_shiny_female: null

    }
}

const { front_default } = pokemon.sprites

console.log(front_default);