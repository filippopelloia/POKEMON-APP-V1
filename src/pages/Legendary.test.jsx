import {render, screen} from '@testing-library/react'
import Legendary from './Legendary.jsx'
// import {BrowserRouter} from 'react-router-dom'

// const MockPokemon = (props) => {
//     return(
//         <BrowserRouter>
//             <Hell titolo={props.titolo} />
//         </BrowserRouter>
//     )
// }
 

// import { LensRounded } from '@mui/icons-material';
// import handlers from './mocks/handlers.jsx'
// import { setupServer } from 'msw/node';

// const server = setupServer(...handlers)

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());

// it('Should render an image, id, name, and one or two types for each pokemon-section', () => {
//     render(<Legendary/>);
    
// })


it('should be visible the section which contains the API data', () => {
    render(<Legendary/>);
    const DataSection = screen.getByTestId('national-section');
    expect(DataSection).toBeVisible();
})

it('should the header be visible', () => {
    render(<Legendary/>);
    const header = screen.getByTestId('header');
    expect(header).toBeVisible();
})

it('should change the value of the state shiny', () => {
    render(<Legendary/>);
    co
})


