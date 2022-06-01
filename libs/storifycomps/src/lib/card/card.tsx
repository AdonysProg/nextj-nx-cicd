import styled from 'styled-components'
import type { Product } from '@nextjs-circleci/shared-types'

/* eslint-disable-next-line */

const StyledCard = styled.div`
  display: flex;
  width: 20%;
  text-align: center;
  background-color: #e3e3e3;
  flex-direction: column;
`

const TitleContainer = styled.div``

const Title = styled.h1``

const ProductImage = styled.img`
  width: 200px;
  align-self: center;
`

const ProductPrice = styled.h3``

const ProductDescription = styled.p``

export function Card(props: Product) {
  return (
    <StyledCard data-id={props.id}>
      <ProductImage src="https://picsum.photos/200" />
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <ProductPrice>{props.price}</ProductPrice>
      <ProductDescription>{props.description}</ProductDescription>
    </StyledCard>
  )
}

export default Card
