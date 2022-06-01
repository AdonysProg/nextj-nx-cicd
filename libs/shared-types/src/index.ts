export * from './lib/shared-types'

export interface Product {
  id: number
  title: string
  price: number
  rating: number
  description: string
  categories: Array<string>
  brand: string
  image: string
}
