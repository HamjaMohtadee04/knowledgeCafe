import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
//relation with bookmark or bookmark button
const [bookmarks,setBokmarks] = useState([])

const handleAddToBookmark = blog =>{
 const newBookMarks = [...bookmarks,blog]
 setBokmarks(newBookMarks)
}

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark ={handleAddToBookmark}></Blogs>
     <Bookmarks bookmarks ={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
