import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks (newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
