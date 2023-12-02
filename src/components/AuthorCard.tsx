import React from 'react'
import { IAuthor } from './Authors';

interface IAuthorCard{
    author: IAuthor
}


const AuthorCard = ( {author}:IAuthorCard ) => {
  return (
    <div className="author">
        <div className="author__photo"></div>
        <div className="author__details">
        <div className="author__details__name">{author.name}</div>
        <div className="author__details__contacts">
        <div className="author__details__contacts__phone">{author.phone}</div>
        <div className="author__details__contacts__email"><a href={"mailto:"+author.email}>{author.email}</a></div>
        <div className="author__details__contacts__website"><a href={"http://"+author.website}>{author.website}</a></div>
        </div>
        </div>
    </div>
  )
}

export default AuthorCard