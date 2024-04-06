import React, { useState, FormEvent } from 'react'
import {ITrack} from "@/types/track";

export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    //const [value] = useState<ITrack>()
    const [value, setValue] = useState<Omit<ITrack, 'id'>>;

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true) // Set loading to true when the request starts

        try {
            const formData = new FormData(event.currentTarget)
            const response = await fetch('http://localhost:4000/tracks', {
                method: 'POST',
                body: formData

            })

            // Handle response if necessary
            const data = await response.json()
            // ...
        } catch (error) {
            // Handle error if necessary
            console.error(error)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="domain" value={value.domain}/>
            <input type="text" name="password" value={value.password}/>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
            </button>
        </form>
    )
}
