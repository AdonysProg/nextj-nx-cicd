import styled from 'styled-components'
import React from 'react'
import type { Product } from '@nextjs-circleci/shared-types'
import { Card } from '@nextjs-circleci/storifycomps'
const StyledPage = styled.div`
  display: flex;
  justify-content: space-around;
`

export function Index({
  q,
  products: initialProducts,
}: {
  q: string
  products: Product[]
}) {
  const [search, setSearch] = React.useState(q)
  const [products, setProducts] = React.useState<Product[]>(initialProducts)

  React.useEffect(() => {
    fetch(`/api/products?q=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [search])

  const onSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [],
  )

  return (
    <>
      <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ" rel="noreferrer">
        CI/CD - Click for more info!
      </a>
      <input
        type="text"
        value={search}
        onChange={onSearch}
        style={{
          backgroundColor: 'black',
          color: '#fff',
          fontSize: 19,
          display: 'flex',
          margin: '20px auto',
        }}
      />
      <StyledPage>
        {products.map((product, index: number) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            brand={product.brand}
            categories={product.categories}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </StyledPage>
    </>
  )
}

export async function getServerSideProps(context) {
  let products: Product[] = []
  if (context.query.q) {
    const res = await fetch(`http://localhost:3333/search?q=${context.query.q}`)
    products = await res.json()
  }
  return {
    props: {
      q: context.query.q ?? '',
      products,
    },
  }
}

export default Index
