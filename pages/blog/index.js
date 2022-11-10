import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Post from '../../components/post';




//generate html after fetch data from api and used to inject props 
export const getStaticProps = async () => {
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json()
    return {
        props: { posts: data.posts }
    }
}
const Blog = ({ posts }) => {
    // const [posts, setPosts] = useState([])
    // const fetchPosts = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
    //     const data = await res.json()
    //     setPosts(data)
    // }
    // useEffect(() => {
    //     fetchPosts()
    // }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h1 >Blog</h1>
                <hr />
                <div className="row">
                    {posts.map((post) => (
                        <div className='col-12 col-md-4' key={post.id}>
                            <Post post={post} />
                        </div>
                    ))}
                </div >
            </div >
        </div >
    )
}

export default Blog