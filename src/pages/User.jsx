import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Profile from "../components/Profile"

export default function User() {
    const { name } = useParams()

    const [userData, setUserData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://api.github.com/users/" + name)
            const data = await res.json()
            console.log(data)
            setUserData(data)
        }
        getData()
    }, [])

    return (
        <div>
            <Profile user={userData} />
        </div>
    )
}
