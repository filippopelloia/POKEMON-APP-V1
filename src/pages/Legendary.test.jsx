import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import Legendary from './Legendary.jsx'
import { setupServer } from 'msw/node';
import { handlersLegendary } from '../mocks/handlers-legendaty.jsx'; 


// // CREO SERVER MSW
const server = setupServer(...handlersLegendary)

// // Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST



describe('FAKE API tests', () => {

    it('should render the Mewtwo data', async () => {
        render(<Legendary/>);
        await waitFor(() => {
            const idMewtwo = screen.getByText('#id-150');
            const nameMewtwo = screen.getByText('Pokemon-150');
            const mewtwoImage = screen.getByTestId('pokemon-150');
            const switchButton = screen.getByTestId('switchButton');
            const firstType = screen.getByText('pokemon-150-type1');
            const secondType = screen.getByText('pokemon-150-type2');
            expect(idMewtwo).toBeInTheDocument();
            expect(nameMewtwo).toBeInTheDocument();
            expect(firstType).toBeInTheDocument();
            expect(secondType).toBeInTheDocument();
            expect(mewtwoImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png');
            fireEvent.click(switchButton);
            expect(mewtwoImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png');
        }, {timeout: 5000})
    })

})




describe('API REAL tests', () => {

    //POKEMON CARD
    it('should render the data of a pokemon', async () => {
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


//INPUT
describe('input test', () => {

    it('should render the results', async () => {
        render(<Legendary/>);
        await waitFor(() => {
            setTimeout(() => {
                const hoohName = screen.getByText('Ho-oh');
                const input = screen.getByPlaceholderText('Search');
                expect(hoohName).toBeVisible();
                
                fireEvent.change(input, {target: {value: 'Lugia'}})
                const lugiaName = screen.getByText('Lugia');
                expect(lugiaName).toBeVisible();
                expect(hoohName).not.toBeVisible();
            }, 2000)
        }, {timeout: 5000})
     })

})


//SWITCH
describe('button tests', () => {

    it('should render the shiny images when I click on the switch', async () => {
        render(<Legendary/>);
        await waitFor(() => {
            setTimeout(() => {
                const switchButton = screen.getByTestId('switchButton');
                const lugia = screen.getByTestId('Lugia');
                expect(lugia).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png');

                fireEvent.click(switchButton);
                expect(lugia).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/249.png');
            }, 2000)
        }, {timeout: 5000})
    })

})

 