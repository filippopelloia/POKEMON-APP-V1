import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import National from './National.jsx'
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers'; 



// CREO SERVER MSW
const server = setupServer(...handlers)

// Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST




describe('National section', () => {

    //POKEMON ID
    it('should render the ID of Bulbasaur', async () => {
        render(<National/>);

        // Aspetta che la chiamata API sia stata effettuata e che i dati dei pokemon siano stati visualizzati
        await waitFor(() => {
            const pokemonId = screen.getByText('#1');
            expect(pokemonId).toBeInTheDocument();
        }, {timeout: 2000});
    })

    //POKEMON DEFAULT IMAGE
    it('should render the default image of Bulbasaur', async () => {
        render(<National />); 

        await waitFor(() => {
            const defaultImage = screen.getByTestId('bulbasaur');
            expect(defaultImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
        }, {timeout: 2000})
    })

    //POKEMON SHINY IMAGE
    it('should render the shiny image of Bulbasaur', async () => {
        render(<National />);
        const switchButton = screen.getByTestId('switchButton');
        fireEvent.click(switchButton);

        await  waitFor(() => {
            const shinyImage = screen.getByTestId('bulbasaur');
            expect(shinyImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png');
        }, {timeout: 3000});
    })

    //POKEMON NAME
    it('should render the name of Bulbasaur', async () => {
        render(<National/>);

        await waitFor(() => {
            const name = screen.getByText('Bulbasaur');
            expect(name).toBeVisible();
        }, {timeout: 2000});
    })

    //POKEMON FIRST TYPE
    it('should render the first type of Bulbasaur', async () => {
        render(<National/>);
        await waitFor(() => {
            const firstType = screen.getByTestId('bulbasaurgrass');
            expect(firstType).toBeVisible();
        }, {timeout: 2000});
    })

    //POKEMON SECOND TYPE
    it('should render the second type of Bulbasaur', async () => {
        render(<National/>);
        await waitFor(() => {
            const secondType = screen.getByTestId('bulbasaurpoison');
            expect(secondType).toBeVisible();
        }, {timeout: 3000})
    })



})