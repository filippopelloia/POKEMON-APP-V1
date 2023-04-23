import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import National from './National.jsx'
import { setupServer } from 'msw/node';
import { handlersNational } from '../mocks/handlers-national'; 



// CREO SERVER MSW
const server = setupServer(...handlersNational)

// Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST




describe('API REAL tests', () => {

    it('should render the pokemon data', async () => {
        render(<National/>);
        await waitFor(() => {
            setTimeout(() => {

                const idPokemon = screen.getByTestId('legend');
                const namePokemon = screen.getByText('Bulbasaur');
                const firstType = screen.getByTestId('bulbasaurgrass')
                const secondType = screen.getByTestId('bulbasaurpoison');
                const image = screen.getByTestId('bulbasaur');
                const switchButton = screen.getByTestId('switchButton');
                expect(idPokemon).toHaveTextContent('#1');
                expect(namePokemon).toBeInTheDocument();
                expect(firstType).toBeInTheDocument();
                expect(secondType).toBeInTheDocument();
                expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');

                fireEvent.click(switchButton);
                expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png');

            }, 2000)
        }, {timeout: 5000})
    })
})


describe('API FAKE tests', () => {

    it('should render the Charizard data', async () => {
        render(<National/>);
        await waitFor(() => {
            setTimeout(() => {
                const idCharizard = screen.getByText('Pokemon-6');
                expect(idCharizard).toBeInTheDocument();
            }, 2000)
        }, {timeout: 5000})
    })

})



// describe('National section', () => {

//     //POKEMON ID
//     it('should render the ID of Bulbasaur', async () => {
//         render(<National/>);

//         // Aspetta che la chiamata API sia stata effettuata e che i dati dei pokemon siano stati visualizzati
//         await waitFor(() => {
//             const pokemonId = screen.getByText('#1');
//             expect(pokemonId).toBeInTheDocument();
//         }, {timeout: 8000});
//     })

//     //POKEMON DEFAULT IMAGE
//     it('should render the default image of Bulbasaur', async () => {
//         render(<National />); 

//         await waitFor(() => {
//             const defaultImage = screen.getByTestId('bulbasaur');
//             expect(defaultImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
//         }, {timeout: 5000})
//     })

//     //POKEMON SHINY IMAGE
//     it('should render the shiny image of Bulbasaur', async () => {
//         render(<National />);
//         const switchButton = screen.getByTestId('switchButton');
//         fireEvent.click(switchButton);

//         await  waitFor(() => {
//             const shinyImage = screen.getByTestId('bulbasaur');
//             expect(shinyImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png');
//         }, {timeout: 5000});
//     })

//     //POKEMON NAME
//     it('should render the name of Bulbasaur', async () => {
//         render(<National/>);

//         await waitFor(() => {
//             const name = screen.getByText('Bulbasaur');
//             expect(name).toBeVisible();
//         }, {timeout: 5000});
//     })

//     //POKEMON FIRST TYPE
//     it('should render the first type of Bulbasaur', async () => {
//         render(<National/>);
//         await waitFor(() => {
//             const firstType = screen.getByTestId('bulbasaurgrass');
//             expect(firstType).toBeVisible();
//         }, {timeout: 8000});
//     })

//     //POKEMON SECOND TYPE
//     it('should render the second type of Bulbasaur', async () => {
//         render(<National/>);
//         await waitFor(() => {
//             const secondType = screen.getByTestId('bulbasaurpoison');
//             expect(secondType).toBeVisible();
//         }, {timeout: 8000})
//     })
// })




//BUTTON

// describe('Show More button', () => {

//     it('should render the Show More button', () => {
//         render(<National/>);
//         const showMore = screen.getByText('Show More');
//         expect(showMore).toBeVisible();
//     })

//     it('should render 60 pokemon at the first render', async () => {
//         render(<National/>);

//         await waitFor(() => {
//             const initialPokemon = screen.getAllByTestId('sections');
//             expect(initialPokemon).toHaveLength(60);
//         }, {timeout: 5000})
//     })


//     it('should render a total amount of 162 pokemon if I click on the button', async () => {
//         render(<National/>);

//         const showMore = screen.getByText('Show More');

//         fireEvent.click(showMore);
//         await waitFor(() => {
//             setTimeout(() => {
//                 const second = screen.getAllByTestId('sections');
//                 expect(second).toHaveLength(162);
//             }, 2000)
//         }, {timeout: 5000});
//     })
// })