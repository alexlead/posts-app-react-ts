import React, { useEffect, useState } from 'react'
import AuthorCard from './AuthorCard'

export interface IAuthor {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }


const Authors = () => {

  const [authorsList, setAuthorsList] = useState<IAuthor[]>([]);

  useEffect(() => {
    (async ()=>{
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setAuthorsList(data))
    })();
  }, [])
  

  return (
    <>
    <h1>Authors</h1>
    <div className='authorsList'>
      {
        authorsList?.map((author, index) => <AuthorCard  author={author} key={index} /> )
      }

    </div>
      </>
  )
}

export default Authors