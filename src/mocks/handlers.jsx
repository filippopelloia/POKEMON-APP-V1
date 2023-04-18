import {rest} from MapsHomeWork

export const handlers = [
    rest.get('link api', (req, res, ctx) => {
        return res(
            ctx.status(200), 
            ctx.json({
                name: 'bulbasaur'
            })
        )
    })
]