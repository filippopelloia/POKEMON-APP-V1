import {render, screen} from '@testing-library/react'
import Daily from './Daily.jsx'

it('It should render a heading', () => {
    render(<Daily/>);
    const DailyComingSoon = screen.getByRole('heading');
    expect(DailyComingSoon).toBeVisible();
})

it('It should render a heading with "COMING SOON" text', () => {
    render(<Daily/>);
    const DailyComingSoon = screen.getByRole('heading');
    expect(DailyComingSoon).toHaveTextContent('COMING SOON');
})