import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Posts from './components/Posts';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Authors from './components/Authors';
import TodoList from './components/TodoList';
import PostShow from './components/PostShow';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
      <div className="container">

      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/posts' element={<Posts/>} />
         <Route path="/posts/:id" element={<PostShow/>} />
         <Route path='/todo' element={<TodoList/>} />
         <Route path='/authors' element={<Authors/>} />
      </Routes>
      </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
