import * as React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import posts from './posts.js'
import * as Layouts from '../common/layouts'

export function Blog(props: RouteComponentProps<{}>) {
  return (
    <Layouts.Default title="Blog Posts">
      <ul>
        {posts.map((post, index) => <li><Link to={`/blog/${index}`}>{index} – {post.title}</Link></li>)}
      </ul>
    </Layouts.Default>
  )}