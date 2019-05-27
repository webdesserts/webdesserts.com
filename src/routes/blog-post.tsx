import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import posts from './posts'
import * as Layouts from '../common/layouts'

type Props = {
  postId: string
}

export function BlogPost(props: RouteComponentProps<Props>) {
  let { match } = props
  let post = posts[parseInt(match.params.postId)]
  let parent = { name: "All Posts", path: "/blog"}

  return post ? (
    <Layouts.Default title={post.title} parent={parent}>
      {post.body}
    </Layouts.Default>
  ) : (
    <Layouts.Default title="Post Not Found" parent={parent}>
      <p>Sorry, we couldn't find the blog post you were looking for.</p>
    </Layouts.Default>
  )
}