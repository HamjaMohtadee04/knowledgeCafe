import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark,MarkAsRead}) => {
    const[blogs,setBlogs] = useState([])
        useEffect(()=>{
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        },[])
    
    return (
        <div className="md: w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                     blog ={blog}
                     handleAddToBookmark={handleAddToBookmark}
                     MarkAsRead={MarkAsRead}>
                    
                     </Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmark:PropTypes.func,
    MarkAsRead:PropTypes.func
}
export default Blogs;