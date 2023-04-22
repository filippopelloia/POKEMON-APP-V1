import {rest} from 'msw'

export const handlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon/articuno', (req, res, ctx) => {
        return res(
            ctx.status(200), 
            ctx.json({
                id: '144',
                name: 'articuno',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png',
                },
                types: [
                    {
                        type: {
                            name: 'ice',
                        },
                    },
                    {
                        type: {
                            name: 'flying',
                        },
                    },
                ]
            })
        )
    })
]