import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
//relation with bookmark or bookmark button
const [bookmarks,setBokmarks] = useState([])
//for reading time we contain time or integer not an array
const [readingTime,setReadingTime] = useState(0)

const handleAddToBookmark = blog =>{
 const newBookMarks = [...bookmarks,blog]
 setBokmarks(newBookMarks)
}
const MarkAsRead = time =>{
  const newReadingTime =readingTime+time
 setReadingTime(newReadingTime);
}

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark ={handleAddToBookmark} MarkAsRead={MarkAsRead}></Blogs>
     <Bookmarks bookmarks ={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
