import {render, screen, waitFor} from '@testing-library/react';
import Type from './Type.jsx';

import { setupServer } from 'msw/node';
import { handlersType } from '../mocks/handlers-type.jsx'; 


// // CREO SERVER MSW
const server = setupServer(...handlersType)

// // Esegui il setup e il teardown del server MSW prima e dopo i test
beforeAll(() => server.listen()); //PREPARA IL SERVER AL PRIMO AVVIO
afterAll(() => server.close()); //CHIUDE IL SERVER DOPO TUTTI I TEST
afterEach(() => server.resetHandlers()); //CHIAMATA QUANDO FINISCE UN TEST PER POTER REIMPOSTARE E PREPARARE AL PROSSIMO TEST



describe('FAKE API tests', () => {

    it('should render', async () => {
        render(<Type/>);
        await waitFor(() => {
            const bulbasaurName = screen.getByText('Pokemon-147');
            expect(bulbasaurName).toBeVisible();
        }, {timeout: 5000})
    })
})