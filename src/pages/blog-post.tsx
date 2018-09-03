import * as React from 'react'
import { Page, PageProps } from './page'
import posts from './posts'

type Props = {
  postId?: string
} & PageProps

export function BlogPost(props: Props) {
  let { postId } = props
  let post = posts[parseInt(postId)]
  return post ? (
    <Page title={post.title} subPage={props.children}>
      {post.body}
    </Page>
  ) : (
    <React.Fragment>Post Not Found</React.Fragment>
  )
}