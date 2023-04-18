import {render, screen} from '@testing-library/react'
import Legendary from './Legendary.jsx'



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

// it('should change the value of the state shiny', () => {
//     render(<Legendary/>);
//     const shinyButton = screen.get
// })


