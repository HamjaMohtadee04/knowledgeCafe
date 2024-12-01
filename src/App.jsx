import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
//relation with bookmark or bookmark button
const [bookmarks,setBookmarks] = useState([])
//for reading time we contain time or integer not an array
const [readingTime,setReadingTime] = useState(0)

const handleAddToBookmark = blog =>{
 const newBookMarks = [...bookmarks,blog]
 setBookmarks(newBookMarks)
}
const MarkAsRead = (time,id) =>{
  const newReadingTime =readingTime+time
 setReadingTime(newReadingTime);
 //remove bookmark
const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
setBookmarks(remainingBookMark)
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
