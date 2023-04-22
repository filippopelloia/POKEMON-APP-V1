import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import Regions from './Regions.jsx'


import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers'; 


 
// CREO SERVER MSW
const server = setupServer(...handlers)

// Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST



describe('Regions section', () => {

    it('should render \'Pokedex of Johto\' ', async () => {
        render(<Regions />);
        const johtoButton = screen.getByTestId('johtoRegion');
        const pokedex = screen.getByTestId('currentRegion');
        expect(pokedex).toHaveTextContent('Pokedex of Galar')

        fireEvent.click(johtoButton);

        await waitFor(() => {
            setTimeout(() => {
                expect(pokedex).toHaveTextContent('Pokedex of Johto');
            }, 2000)
        }, {timeout: 5000})
    })


    test('should render Chikorita name', async () => {
        render(<Regions/>);

        const johto = screen.getByTestId('johtoRegion');
        fireEvent.click(johto);

        await waitFor(() => {
            setTimeout(() => {
                const cardId = screen.getByTestId('#152');
                const cardName = screen.getByText('Chikorita');
                const image = screen.getByTestId('chikorita');
                expect(cardId).toBeVisible();
                expect(cardName).toBeVisible();
                expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png')
            }, 2000)
        }, {timeout: 5000})
    });

})