import { rest } from 'msw';

const indexLegends = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 570, 571, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 716, 717, 718, 719, 720, 772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800, 888, 889, 890, 891, 892, 894, 895, 896, 897, 898, 905];

const handlers = indexLegends.map((id) => {
  return rest.get(`https://pokeapi.co/api/v2/pokemon/${id}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id:`${id}`,
        name: `pokemon-${id}`,
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
});

export { handlers };







// export const handlers = [
//     rest.get('https://pokeapi.co/api/v2/pokemon/articuno', (req, res, ctx) => {
//         return res(
//             ctx.status(200), 
//             ctx.json({
//                 id: '144',
//                 name: 'articuno',
//                 sprites: {
//                     front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
//                     front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png',
//                 },
//                 types: [
//                     {
//                         type: {
//                             name: 'ice',
//                         },
//                     },
//                     {
//                         type: {
//                             name: 'flying',
//                         },
//                     },
//                 ]
//             })
//         )
//     })
// ]




// import { rest } from 'msw';

// export const handlers = [
//   rest.get('https://pokeapi.co/api/v2/pokemon/:id', (req, res, ctx) => {
//     const { id } = req.params;
//     return res(
//       ctx.status(200),
//       ctx.json({
//         id: id,
//         name: `pokemon-${id}`,
//         sprites: {
//           front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
//           front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
//         },
//         types: [
//           {
//             type: {
//               name: 'type1',
//             },
//           },
//           {
//             type: {
//               name: 'type2',
//             },
//           },
//         ],
//       })
//     );
//   }),
// ];




// In questo esempio, stiamo utilizzando il pacchetto msw per simulare una chiamata API, e definiamo una sola gestione per la chiamata GET alla URL https://pokeapi.co/api/v2/pokemon/:id. 
// Utilizziamo il parametro :id per ottenere l'id del Pokemon richiesto, e restituiamo una risposta contenente informazioni di base sul Pokemon richiesto.

// E' importante notare che questo esempio è molto semplificato rispetto alla chiamata effettuata dal componente file, poiché restituisce solo i dati di un singolo Pokemon e non richiede la concatenazione di più chiamate API. 
// Potresti quindi dover personalizzare ulteriormente il file handlers in base alle tue esigenze.
