import * as express from 'express'
import * as cors from 'cors'
import { products } from './products'

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api dear medify user!' })
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/search', (req, res) => {
  const query = ((req.query.q as string) ?? '').toLowerCase()
  res.send(products.filter(({ title }) => title.toLowerCase().includes(query)))
})

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)

/**
 * @description This is only for testing purposes.
 * @argument {string} name - name of the DU HAST
 * @returns {Promise<void>}
 */
export const testingJsDocs = (name: string) => {
  console.log('LEAVE ME ALONE!!', name)
  return 'DU HAST MICH GEFRAGT'
}
