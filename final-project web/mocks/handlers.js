// src/mocks/handlers.js
import { rest } from 'msw'
import { data } from './data'
export const handlers = [
   rest.get("/api/new-arivals", (req , res, ctx) => {}),
   rest.get("/api/products", (req, res, ctx) => {
       return res(ctx.delay(1000), ctx.json(data.products))
   }),
   rest.post("/api/user/signup", (req, res, ctx) => {}),
   rest.post("/api/user/signin", (req, res, ctx) => {})
   
  
]