import React, { useState, useEffect } from 'react'
import useSwr from 'swr'
const DashboardSWR = () => {
    const fetcher = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
        const data = await res.json()
        return data
    }
    const { data, error } = useSwr('dashboard', fetcher)

    if (error) return "error has occured"
    if (!data) return "loading..."


    //normal fetch 
    // const [isLoading, setIsLoading] = useState(true)
    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
    //         const data = await res.json()
    //         setData(data)
    //         setIsLoading(false)
    //     }
    //     fetchData()
    // }, [])
    if (isLoading) return <div>Loading ...</div>

    return (
        <div>

            <div>Dashboard</div>
            {/*data fetched from api */}
        </div>
    )
}

export default DashboardSWR