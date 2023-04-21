import {screen, render, fireEvent, waitFor} from '@testing-library/react'
import Header from './Header.jsx'
// import {BrowserRouter} from 'react-router-dom'

// const MockMode = (props) => {
//     return(
//         <BrowserRouter>
//             <Header />
//         </BrowserRouter>
//     )
// }

describe('Header section', () => {
    
    it('NORMAL color after clicking should be grey', async () => {
        render(<Header shiny={true} />);
        const normal = screen.getByText('NORMAL');

        expect(normal).toHaveStyle("color: #a6a6a6");
    })

    it('SHINY color after clicking should be grey', async () => {
        render(<Header shiny={true} />);
        const shiny = screen.getByText('SHINY');

        expect(shiny).toHaveStyle("color: black");
    })

    it('Input test', async () => {
        render(<Header />);
        const input = screen.getByPlaceholderText('Search');

        expect(input).toBeVisible();
    })

    

})