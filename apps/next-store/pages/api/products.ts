// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Product } from '@nextjs-circleci/shared-types'

const products: Product[] = [
  {
    id: 0,
    title: 'First Product',
    price: 24.99,
    rating: 4.3,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware'],
    brand: 'apple',
    image: 'https://picsum.photos/200',
  },
  {
    id: 1,
    title: 'Second Product',
    price: 64.99,
    rating: 3.5,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books'],
    brand: 'apple',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: 'Third Product',
    price: 74.99,
    rating: 4.2,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics'],
    brand: 'apple',
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    title: 'Fourth Product',
    price: 84.99,
    rating: 3.9,
    description:
      'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['hardware'],
    brand: 'apple',
    image: 'https://picsum.photos/200',
  },
]

/**
 *
 * @param {*} req
 * @param {*} res
 */
export default function handler(req, res) {
  const query = ((req.query.q as string) ?? '').toLowerCase()
  res.send(products.filter(({ title }) => title.toLowerCase().includes(query)))
}
