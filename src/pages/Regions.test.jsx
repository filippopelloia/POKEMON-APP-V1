import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import Regions from './Regions.jsx';
import { setupServer } from 'msw/node';
import { handlersRegions } from '../mocks/handlers-regions'; 


// CREO SERVER MSW
const server = setupServer(...handlersRegions)

// Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST



describe('FAKE API tests', () => {

    it('should render the Galar\'s pokemon', async () => {
        render(<Regions/>);
        await waitFor(() => {
            const idEternatus = screen.getByText('#id-890');
            const nameEternatus = screen.getByText('Pokemon-890');
            const eternatusImage = screen.getByTestId('pokemon-890');
            const switchButton = screen.getByTestId('switchButton');
            const firstType = screen.getByText('pokemon-890-type1');
            const secondType = screen.getByText('pokemon-890-type2');
            expect(firstType).toBeVisible();
            expect(secondType).toBeVisible();
            expect(idEternatus).toBeVisible();     
            expect(nameEternatus).toBeVisible();    
            expect(eternatusImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png');
            fireEvent.click(switchButton);
            expect(eternatusImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/890.png');
        }, {timeout: 5000})               
    })

})



describe('regions section', () => {

    it('should render the regions section with all the functionalities', async () => {
        render(<Regions/>);
                const title = screen.getByText('Pokedex of Galar');
                expect(title).toBeVisible();
                const kantoButton = screen.getByText('Kanto');
                expect(kantoButton).toBeVisible();
    })
})