import React from 'react'
import { useRouter } from 'next/router'


const Post = ({ post }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    return (
        <div className='container'>
            {post.title}
            <hr />
            {post.body}
        </div>
    )
}

export default Post

export const getStaticPaths = async () => {
    // const res = await fetch('https://dummyjson.com/posts')
    // const data = await res.json()
    // const paths = data.posts.map(post => {
    //     return {
    //         params: { id: 1 }
    //     }
    // })
    return {
        paths: [{ params: { postId: '1' } }],
        fallback: true
    }
}

//context contains params
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://dummyjson.com/posts/' + id)
    const data = await res.json()
    return {
        props: { post: data }
    }
}