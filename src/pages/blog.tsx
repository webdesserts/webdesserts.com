import * as React from 'react'
import { Page, PageProps } from './page'
import { Link } from '@reach/router'
import posts from './posts.js'

export function Blog(props: PageProps) {
  return (
    <Page title="Blog Posts" subPage={props.children}>
      <ul>
        {posts.map((post, index) => <li><Link to={`./${index}`}>{index} – {post.title}</Link></li>)}
      </ul>
    </Page>
  )
}