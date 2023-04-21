import {render, screen, fireEvent} from '@testing-library/react'
import Card from './Card.jsx'
import {BrowserRouter} from 'react-router-dom'



const MockLocationFoot = (props) => {
    return(
        <BrowserRouter>
            <Card 
                id={props.id}
            />
        </BrowserRouter>
    )
}



describe('card section', () => {

    it('should render the front_default image', async () => {
        render(<Card front_default={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'} />);
        const front_default = await screen.findByRole('img');
        expect(front_default).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png');
    })

    it('should render the name', async () => {
        render(<Card upper='A' slice='rticuno' />);
        const upper = await screen.findByRole('heading', {level: 3});
        const slice = await screen.findByRole('heading', {level: 3});
        expect(upper).toHaveTextContent('A');
        expect(slice).toHaveTextContent('rticuno');
    })
    
    it('should render the id', async () => {
        render(<MockLocationFoot id={145} />);
        const id = await screen.findByTestId('legend');
        expect(id).toHaveTextContent('#145')
    })
})