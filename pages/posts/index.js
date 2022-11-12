import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Post from '../../components/post';


//generate html after fetch data from api and used to inject props 
export const getStaticProps = async () => {
    console.log("geanerating /posts",)
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json()
    return {
        props: { posts: data.posts },
        //revalidate: 1 //revalidate every 1 second that means that you can update the data in the api and it will be updated in the page
        revalidate: 10,
    }
}
const Posts = ({ posts }) => {
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

export default Posts