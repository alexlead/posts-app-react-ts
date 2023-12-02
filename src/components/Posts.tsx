import React, {useState, useEffect } from 'react'
import Post from './Post';

export interface IPosts   {
    userId: number | any,
    id: number | any,
    title: string,
    body: string
  }

// https://jsonplaceholder.typicode.com/posts

const Posts = () => {


    const [postsList, setPostsList] = useState<IPosts[]>([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setPostsList([...json.filter((item:any, index:number)=>index < 12)]))
    }, [])
    

  return (
    <>
    <h1>Blog</h1>
    <div className="postList">
        {
          postsList && 
          postsList.map( (item, index) => ( 
            <Post key={index} post={item} />
            ) )
            
          }


    </div>
          </>
  )
}

export default Posts