import React, { useEffect, useState } from 'react'
import { IPosts } from './Posts';

import { IAuthor } from './Authors';
import AuthorCard from './AuthorCard';
import Post from './Post';


interface IImage   {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}




const Home = () => {

const [mainImage, setMainImage] = useState<IImage|null>(null);
const [titledPost, setTitledPost] = useState<IPosts|null>(null)
const [authorsList, setAuthorsList] = useState<IAuthor[]>([]);
const [postsList, setPostsList] = useState<IPosts[]>([]);

  useEffect(() => {
    
    (async () => {
      await fetch('https://jsonplaceholder.typicode.com/photos/1')
        .then(res=>res.json())
        .then(json=> setMainImage(json))
    })();

    (async()=>{
      await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res=>res.json())
      .then(json=> setTitledPost(json))
    })();

    (async ()=>{
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setAuthorsList(data.filter((item:any, index:number)=> index<3)))
    })();
    
    (async ()=>{
      await  fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setPostsList([...json.filter((item:any, index:number)=>index < 3)]))
    })();


  
   }, [])
  

  return (
    <div>

    <div className="titledPost">
    <div className="titledPost__img">

    { mainImage &&
     <img src={mainImage.url} alt={mainImage.title} className='titledPostImg'/>}
     </div>
      <div className="titledPost__post">
        <h2>{titledPost?.title}</h2>
        <p>{titledPost?.body.substr(0,60)+"..."}</p>
      </div>
     </div>

<h2>Latest news</h2>
<div className="postList">
        {
          postsList && 
          postsList.map( (item, index) => ( 
            <Post key={index} post={item} />
            ) )
            
          }


    </div>
<h2>Top Authors</h2>
<div className="topAutors">
  {
    authorsList?.map((author, index) => <AuthorCard  author={author} key={index} /> )
  }
</div>
    </div>
  )
}

export default Home