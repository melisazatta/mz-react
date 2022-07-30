import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const PostDetail = () => {

  const [ post, setPost] = useState({
    title: '',
    body: '',
    image: '',
    id: ''
  })

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async() => {
      const res = await axios.get(`http://localhost:3030/posts/${params.id}`)
      setPost(res.data)
  })();
  }, [params.id]);

  const handleDelete = async () => {
    const res = await axios.delete('http://localhost:3030/posts/' + params.id)
    console.log(res)
    navigate('/')
  }

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <div className='card bg-dark'>
        <img src={post.image} alt={post.title} className='card-img-top'/>
        <div className='card-body'>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
          <button className='mt-2 btn btn-outline-danger' onClick={handleDelete}>
            Delete
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail