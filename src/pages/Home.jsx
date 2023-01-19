import React, { useEffect, useState } from "react"
import Card from "../components/Card"

export default function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://api.github.com/users")
            const data = await res.json()
            console.log(data)
            setUsers(data)
        }
        getData()
    }, [])

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold p-2">Select an user!</h1>
            <div className="p-2.5 grid gap-3 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
                {users.map((user) => (
                    <Card user={user} />
                ))}
            </div>
        </div>
    )
}
