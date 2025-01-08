import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <dev className='container'>
      <h1>Board App</h1>
      <h2>* 게시판 앱</h2>

      <Link to="/boards" className='btn'>게시판</Link>
    </dev>
    </>
  )
}

export default Home