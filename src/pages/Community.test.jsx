import {render, screen} from '@testing-library/react'
import Community from './Community.jsx'

it('It should render a heading', () => {
    render(<Community/>);
    const comingSoon = screen.getByRole('heading');
    expect(comingSoon).toBeVisible();
})

it('It should render a heading with "COMING SOON" text', () => {
    render(<Community/>);
    const comingSoon = screen.getByRole('heading');
    expect(comingSoon).toHaveTextContent('COMING SOON');
})