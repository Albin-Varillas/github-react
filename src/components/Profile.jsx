import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Url } from "../assets/url.svg"

export default function Profile({ user }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="px-3">
            <div className="flex items-center mb-4 gap-3">
                <img
                    src={user.avatar_url}
                    alt="profil-picture"
                    className="rounded-full w-24 border-2 border-[rgba(240,246,252,0.1)]"
                />
                <div>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-text-dimmed text-xl">{user.login}</p>
                </div>
            </div>
            <img src="" alt="" />
            <p className="text-xs">{user.bio}</p>
            <div className="flex items-center gap-2">
                <div className="fill-text-dimmed">
                    <Url />
                </div>
                <a href={user.blog} className="text-xs">
                    {user.blog}
                </a>
            </div>
            <p className="font-semibold text-xs">
                {user.followers}
                <Link
                    to={`/${user.login}/followers`}
                    className="text-text-dimmed font-normal "
                >
                    followers
                </Link>{" "}
                ·{user.following}{" "}
                <span className="text-text-dimmed font-normal">following</span>{" "}
            </p>
        </div>
    )
}
