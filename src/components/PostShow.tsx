import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPosts } from './Posts';
import PostComments from './PostComments';


const PostShow = () => {

    const { id } = useParams();
    const [postItem, setPostItem] = useState<IPosts|null>(null);

    useEffect(() => {
      ( async() => {
        await fetch("https://jsonplaceholder.typicode.com/posts/"+id)
            .then(res=>res.json())
            .then(json=>setPostItem(json))
      })()
    }, [id])
    

  return (
    <>
    <article className='post'>
        <h1>{postItem?.title}</h1>
        <div>
            {postItem?.body}
        </div>
</article>
<div className="comments">
    {
        postItem &&
            <PostComments/>
    }
</div>
    </>
  )
}

export default PostShow