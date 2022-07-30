import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostGallery = () => {

    const [ posts, setPosts ] = useState([]);
    const navigate = useNavigate()

    useEffect (() => {
        (async() => {
            const res = await axios.get('http://localhost:3030/posts')
            setPosts(res.data)
            console.log(res)
    })();
}, []);

  return (
    <div className='row'>{posts.map(post => (
        <div className='card-image col-md-4 p-1 card bg-dark' onClick={() => navigate(`/posts/${post.id}`)} key={post.id}>
          <h3 className="text-md font-semibold">{post.title}</h3>
            <img src={post.image} alt={post.title} className="img-fluid h-100 w-100"/>
            
        </div>
    ))}</div>
  )
}

export default PostGallery