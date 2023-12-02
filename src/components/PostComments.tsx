import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostCommentItem from './PostCommentItem';

export interface IComments {
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string
}

const PostComments = () => {

    const { id } = useParams();
    const [commentsList, setCommentsList] = useState<IComments[]>([]);

    useEffect(() => {
        (async()=>{
            await fetch("https://jsonplaceholder.typicode.com/comments?postId="+id)
                .then(res=>res.json())
                .then(json=>setCommentsList([...json]));
        })();
    }, [id])
    

  return (
    <>
    <div className="postComments">
    <div className='postComments__header'>Comments</div>
    <div className="postComments__list">
        {
            commentsList?.map((comment, index)=><PostCommentItem comment={comment} key={index}/>)
        }
    </div>
    <div className="postComments__addNew">
        <div>
        <label><span>E-mail:</span><input type="email" /></label>
        </div>
        <div>
        <label><span>Title:</span><input type="text" /></label>
        </div>
        <div>
        <label><span>Comment:</span><textarea></textarea></label>
        </div>  
        <button>Send</button>
    </div>
    </div>
    </>
  )
}

export default PostComments