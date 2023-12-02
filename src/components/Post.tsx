import React from 'react'
import { IPosts } from './Posts'

interface IPost {
    post: IPosts
}


const Post = ( {post}:IPost) => {
  return (
    <div className="postItem">
        <div className="postItem__thumbnail">
          
        </div>
        <div className="postItem__body">
        <h2>{post.title}</h2>
        <div>{post.body.substring(0, 40) + "..."}</div>
        </div>
        <div className="postItem__footer"><a href={"/posts/"+post.id}>Read</a></div>
    </div>
  )
}

export default Post