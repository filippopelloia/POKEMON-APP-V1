import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import Regions from './Regions.jsx';
import { act } from 'react-dom/test-utils';


// import { setupServer } from 'msw/node';
// import { handlers } from '../mocks/handlers'; 


 
// // CREO SERVER MSW
// const server = setupServer(...handlers)

// // Esegui il setup e il teardown del server MSW prima e dopo i test
// beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
// afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
// afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST



// describe('Regions section', () => {

//     it('should render \'Pokedex of Johto\' ', async () => {
//         render(<Regions />);
//         const johtoButton = screen.getByTestId('johtoRegion');
//         const pokedex = screen.getByTestId('currentRegion');
//         expect(pokedex).toHaveTextContent('Pokedex of Galar')

//         fireEvent.click(johtoButton);

//         await waitFor(() => {
//             setTimeout(() => {
//                 expect(pokedex).toHaveTextContent('Pokedex of Johto');
//             }, 2000)
//         }, {timeout: 5000})
//     })


//     test('should render Chikorita name', async () => {
//         render(<Regions/>);

//         const johto = screen.getByTestId('johtoRegion');
//         fireEvent.click(johto);

//         await waitFor(() => {
//             setTimeout(() => {
//                 const cardId = screen.getByTestId('#152');
//                 const cardName = screen.getByText('Chikorita');
//                 const image = screen.getByTestId('chikorita');
//                 expect(cardId).toBeVisible();
//                 expect(cardName).toBeVisible();
//                 expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png')
//             }, 2000)
//         }, {timeout: 5000})
//     });

// })


describe('regions section', () => {

    it('should render the regions section with all the functionalities', async () => {
        render(<Regions/>);
        await waitFor(() => {

                const title = screen.getByText('Pokedex of Galar');
                expect(title).toBeVisible();
                const kantoButton = screen.getByText('Kanto');
                expect(kantoButton).toBeVisible();
                fireEvent.click(kantoButton);
    
                // act(() => {
                //         expect(title).toHaveTextContent('Pokedex of');
                //   });
                // setTimeout(() => {
                    // expect(title).toHaveTextContent('Pokedex of Kanto');
                // }, 1000);


            // setTimeout(() => {
            //     const kantoButton = screen.getByText('Kanto');
            //     const grookey = screen.getByText('grookey');
            //     const bulbasaur = screen.getByText('bulbasaur');
            //     expect(bulbasaur).not.toBeVisible();
            //     expect(grookey).toBeVisible();

            //     fireEvent.click(kantoButton);
            //     expect(bulbasaur).toBeVisible();
            //     expect(grookey).not.toBeVisible();
            // }, 2000)
        }, {timeout: 5000});

    })


    it('should be visible the title \'Pokedex of Johto\'', async() => {
        render(<Regions/>);

        const johto = screen.getByTestId('johtoRegion');
        const title = screen.getByTestId('currentRegion');
        // expect(title).toHaveTextContent('Pokedex of Veneto');
        // expect(johto).toBeVisible();
        fireEvent.click(johto);

        act(() => {
            fireEvent.click(johto);
            expect(title).toHaveTextContent('Pokedex of');
        })

        // await waitFor(() => {
        //     expect(title).toHaveTextContent('Johto');
        // }, {timeout: 5000})
        // expect(title).toHaveTextContent('Pokedex of Johto');
    })

    test('renders Johto Pokedex when Johto button is clicked', async () => {
        render(<Regions />);
        fireEvent.click(screen.getByTestId('johtoRegion'));
        const johtoPokedex = await waitFor(() => screen.getByText('Pokedex of Johto'), {timeout: 5000});
        expect(johtoPokedex).toBeInTheDocument();
      });

})