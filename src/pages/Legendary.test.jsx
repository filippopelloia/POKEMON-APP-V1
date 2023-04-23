import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import Legendary from './Legendary.jsx'
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers'; 


// // CREO SERVER MSW
const server = setupServer(...handlers)

// // Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST



describe('FAKE API tests', () => {


    it('should render the default image of Mewtwo', async () => {
        render(<Legendary/>);
        await waitFor(() => {
            const nameMewtwo = screen.getByText('Pokemon-150');
            const mewtwo = screen.getByTestId('pokemon-150');
            const switchButton = screen.getByTestId('switchButton');
            const firstType = screen.getByText('pokemon-150-type1')
            const secondType = screen.getByText('pokemon-150-type2')
            expect(nameMewtwo).toBeInTheDocument();
            expect(firstType).toBeInTheDocument();
            expect(secondType).toBeInTheDocument();
            expect(mewtwo).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png');
            fireEvent.click(switchButton);
            expect(mewtwo).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png');
        }, {timeout: 5000})
    })

})


// // describe('tests from the 2 SIDES', () => {

// //     //POKEMON ID
// //     it('should render the ID of Articuno', async () => {
// //         render(<Legendary/>);

// //         // Aspetta che la chiamata API sia stata effettuata e che i dati dei pokemon siano stati visualizzati
// //         await waitFor(() => {
// //             const pokemonId = screen.getByText('#144');
// //             expect(pokemonId).toBeInTheDocument();
// //         }, {timeout: 8000});
// //     })

// // })





// // describe('API MSW tests', () => {

// //     test('renders pokemon information', async () => {
// //         render(<Legendary />);

// //         await waitFor(() => {
// //             const pokemonId = screen.getByText(/150/i);
// //             const pokemonName = screen.getByText(/Pokemon-150/i);
// //             // const pokemonImage = screen.getByAltText(/pokemon-144/i);
// //             expect(pokemonId).toBeInTheDocument();
// //             expect(pokemonName).toBeInTheDocument();
// //             // expect(pokemonImage).toBeInTheDocument();
// //         }, {timeout: 5000});
// //       });

//     // // POKEMON ID
//     // it('should render the ID of Articuno from MSW', async () => {
//     //     render(<Legendary/>);

//     //     // Aspetta che la chiamata API sia stata effettuata e che i dati dei pokemon siano stati visualizzati
//     //     await waitFor(() => {
//     //         setTimeout(() => {
//     //             const pokemonId = screen.getByText('144');
//     //             expect(pokemonId).toBeVisible();
//     //         }, 2000)
//     //     }, {timeout: 8000});
//     // })


//     //POKEMON NAME
//     // it('should render the name of Articuno', async () => {
//     //     render(<Legendary/>);

//     //     await waitFor(() => {
//     //         setTimeout(() => {
//     //             const pokemonName = screen.getByText('articuno');
//     //             expect(pokemonName).toBeVisible();
//     //         }, 2000)
//     //     }, {timeout: 5000});
//     // })

//     //POKEMON DEFAULT IMAGE
//     // it('should render the default image of Articuno', async () => {
//     //     render(<Legendary />); 

//     //     await waitFor(() => {
//     //         setTimeout(() => {
//     //             const defaultImage = screen.getByTestId('pokemon-144');
//     //             expect(defaultImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png');
//     //         }, 2000)
//     //     }, {timeout: 5000})
//     // })





//     //FUNZIONANTE!!!!


//     // //POKEMON SHINY IMAGE -- SIMULANDO ANCHE IL CLICK
//     // it('should render the shiny image of Articuno', async () => {
//     //     render(<Legendary/>); 
//     //     const switchButton = screen.getByTestId('switchButton'); 
//     //     fireEvent.click(switchButton);

//     //     await waitFor(() => {
//     //         // setTimeout(() => {
//     //             const shinyImage = screen.getByTestId('pokemon-144');
//     //             expect(shinyImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png');
//     //         // }, 2000)
//     //     }, {timeout: 5000});
//     // })






//     // //POKEMON NAME
//     // it('should render the Articuno name', async () => {
//     //     render(<Legendary/>);
        
//     //     await waitFor(() => {
//     //         setTimeout(() => {
//     //             const articunodata = screen.getByText('Articuno');
//     //             expect(articunodata).toBeVisible();
//     //         }, 2000)
//     //     }, {timeout: 5000})
//     // })

//     // //TIPO 1
//     // it('should render the first type of Articuno', async () => {
//     //     render(<Legendary/>);
        
//     //     await waitFor(() => {
//     //         setTimeout(() => {
//     //             const firstType = screen.getByTestId('articunoice');
//     //             expect(firstType).toHaveTextContent('ice');
//     //         }, 2000)
//     //     }, {timeout: 5000})
//     // })


//     // //TIPO 1
//     // it('should render the first type of Articuno', async () => {
//     //     render(<Legendary/>);
        
//     //     await waitFor(() => {
//     //         setTimeout(() => {
//     //             const secondType = screen.getByTestId('articunoflying');
//     //             expect(secondType).toHaveTextContent('flying');
//     //         }, 2000)
//     //     }, {timeout: 5000})
//     // })

// // })


describe('API REAL tests', () => {

    //POKEMON CARD
    it('should render the ID of the pokemon', async () => {
        render(<Legendary/>);
        await waitFor(() =>{
            setTimeout(() => {
                const idPokemon = screen.getByTestId('legend');
                const namePokemon = screen.getByText('Mewtwo');
                const firstType = screen.getByTestId('moltresfire')
                const secondType = screen.getByTestId('moltresflying')
                const image = screen.getByTestId('moltres');
                const switchButton = screen.getByTestId('switchButton');
                expect(idPokemon).toHaveTextContent('#150');
                expect(namePokemon).toBeInTheDocument();
                expect(firstType).toHaveTextContent('fire');
                expect(secondType).toHaveTextContent('flying');
                expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png')

                fireEvent.click(switchButton);
                expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/146.png')
            }, 2000)
        }, {timeout: 5000})
    })
})



 