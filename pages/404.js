import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Error = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return (
        <div className="container">
            <h1>Page not found</h1>
            <Link className='btn btn-primary' href='/'>Go back to home</Link>
        </div>
    )
}

export default Error