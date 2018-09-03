import * as React from 'react'
import styled from 'styled-components'

let CardListWrapper = styled.article`
  & > *+* {
    margin-top: 16px;
  }
`

let CardSection = styled.section``

let CardLink = styled.a`
  &[href] {
    display: block;
    padding-left: 8px;
    border-left: 2px solid var(--primary);
    color: var(--dark);
    text-decoration: none;
    transition: border-left 200ms ease;
  }

  &:hover, &:focus {
    border-left-width: 4px;
  }

  & > * + * {
    margin-top: 8px;
  }

  header {
    font-weight: 400;
    font-size: 20px;
    color: var(--primary);
  }
`

export function Card ({ title, url, description }) {
  return (
    <CardSection>
      <CardLink href={url}>
        <header>{title}</header>
        <p>{description}</p>
      </CardLink>
    </CardSection>
  )
}

export function CardList ({ cards }) {
  let list = cards.map(({ title, description, url }) => (
    <Card key={title} url={url} title={title} description={description}/>
  ))

  return (
    <CardListWrapper>{list}</CardListWrapper>
  )
}
