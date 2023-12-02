import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <div className="logo__image">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo__text">
            <a href="/">
                React Routing
                </a>

                </div>
            </div>
            <nav>
                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/posts">Blog</a></li>
                    <li><a href="/todo">Schedule</a></li>
                    <li><a href="/authors">Authors</a></li>
                </ul>
            </nav>

        </div>
    </header>
  )
}

export default Header