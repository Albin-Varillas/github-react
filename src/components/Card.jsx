import React from "react"
import { Link } from "react-router-dom"

export default function Card({ user }) {
    return (
        <Link to={`/${user.login}`}>
            <h1 className="bg-[#21262D] cursor-pointer border-2 border-[rgba(240,246,252,0.1)] text-xl py-2 rounded-md">
                {user.login}
            </h1>
        </Link>
    )
}
