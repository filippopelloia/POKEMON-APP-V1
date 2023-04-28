import { rest } from 'msw';

const start = 1;
const end = 150;
const actualType = 'dragon'

const handlersType = [];

for(let id = start; id < end; id++) {
  handlersType.push(
    rest.get(`https://pokeapi.co/api/v2/pokemon/${id}`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id:`id-${id}`,
          name: `pokemon-${id}-${id.res.name}`,
          sprites: {
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
          },
          types: [
            {
              type: {
                name: `pokemon-${id}-type1`,
              },
            },
            {
              type: {
                name: `pokemon-${id}-type2`,
              },
            },
          ],
        })
      );
    })
  );
};

export { handlersType };
