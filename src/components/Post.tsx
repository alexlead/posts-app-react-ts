import React from 'react'
import { IPosts } from './Posts'

interface IPost {
    post: IPosts
}


const Post = ( {post}:IPost) => {
  return (
    <div>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
    </div>
  )
}

export default Post