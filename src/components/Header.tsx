import React from 'react'
import Navigation from './Navigation'

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
                <Navigation/>
            </nav>

        </div>
    </header>
  )
}

export default Header