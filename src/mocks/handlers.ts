import { rest } from 'msw'

export const handlers = [
  rest.post('/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Peter',
      }),
    )
  }),
]
