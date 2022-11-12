import React, { useState } from 'react'
import { useRouter } from 'next/router';

const Events = ({ events }) => {
    const router = useRouter()
    const [eventsList, setEvents] = useState(events)
    const fetchSportsEvents = async () => {
        const res = await fetch('http://localhost:4001/events?category=sports')
        const data = await res.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, { shallow: true })
    }
    return (
        <>
            <button onClick={fetchSportsEvents}>Sport Event</button>
            <div>Events</div>
            {eventsList.map((event) => {
                return (
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                        <p>{event.description} </p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default Events

export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const queryString = category ? `category=sports` : ''
    const res = await fetch(`http://localhost:4001/events?${queryString}`)
    const data = await res.json()
    return {
        props: { events: data },
    }
}