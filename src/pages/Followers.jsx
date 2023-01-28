import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FollowersUser from "../components/FollowersUser/FollowersUser"

export default function Followers() {
    const { name } = useParams()

    const [userData, setUserData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://api.github.com/users/" + name + "/followers"
            )
            const data = await res.json()
            console.log(data)
            setUserData(data)
        }
        getData()
    }, [])

    return (
        <div>
            {userData.map((user) => (
                <FollowersUser user={user} />
            ))}
        </div>
    )
}
