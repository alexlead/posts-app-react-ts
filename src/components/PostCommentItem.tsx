import React from 'react'
import { IComments } from './PostComments'

interface ICommentItem {
    comment: IComments
}


const PostCommentItem = ( {comment}:ICommentItem ) => {
  return (
    <div className='comment'>
        <div className="comment__header">
            <a href={"mailto:"+comment.email}>{comment.name}</a>
        </div>
        <div className="comment__body">
            {comment.body}
        </div>
    </div>
  )
}

export default PostCommentItem