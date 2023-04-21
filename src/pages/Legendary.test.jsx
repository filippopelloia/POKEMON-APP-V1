import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import Legendary from './Legendary.jsx'
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers'; 


// CREO SERVER MSW
const server = setupServer(...handlers)

// Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST


describe('API tests', () => {

    //POKEMON ID
    it('should render the ID of Articuno', async () => {
        render(<Legendary/>);

        // Aspetta che la chiamata API sia stata effettuata e che i dati dei pokemon siano stati visualizzati
        await waitFor(() => {
            const pokemonId = screen.getByText('#144');
            expect(pokemonId).toBeInTheDocument();
        }, {timeout: 4000});
    })

    //POKEMON DEFAULT IMAGE
    it('should render the default image of Articuno', async () => {
        render(<Legendary />); 

        await waitFor(() => {
            const defaultImage = screen.getByTestId('articuno');
            expect(defaultImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png');
        }, {timeout: 4000})
    })

    //POKEMON SHINY IMAGE -- SIMULANDO ANCHE IL CLICK
    it('should render the shiny image of Articuno', async () => {
        render(<Legendary/>); 
        const switchButton = screen.getByTestId('switchButton'); 
        fireEvent.click(switchButton);

        await waitFor(() => {
            const shinyImage = screen.getByTestId('articuno');
            expect(shinyImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png');
        }, {timeout: 4000});
    })


    //POKEMON NAME
    it('should render the Articuno name', async () => {
        render(<Legendary/>);
        
        await waitFor(() => {
            const articunodata = screen.getByText('Articuno');
            expect(articunodata).toBeVisible();
        }, {timeout: 5000})
    })

    //TIPO 1
    it('should render the first type of Articuno', async () => {
        render(<Legendary/>);
        
        await waitFor(() => {
            const firstType = screen.getByTestId('articunoice');
            expect(firstType).toHaveTextContent('ice');
        }, {timeout: 3000})
    })


    //TIPO 1
    it('should render the first type of Articuno', async () => {
        render(<Legendary/>);
        
        await waitFor(() => {
            const secondType = screen.getByTestId('articunoflying');
            expect(secondType).toHaveTextContent('flying');
        }, {timeout: 5000})
    })

})




 