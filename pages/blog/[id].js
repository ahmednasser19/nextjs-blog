import React from 'react'


export const getStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json()
    const paths = data.posts.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    return {
        paths, fallback: false
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


const Post = ({ post }) => {
    return (
        <div className='container'>
            {post.title}
            <hr />
            {post.body}
        </div>
    )
}

export default Post