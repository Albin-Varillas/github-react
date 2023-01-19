import React from "react"

export default function Profile({ user }) {
    return (
        <div className="px-3">
            <div className="flex items-center mb-4 gap-3">
                <img
                    src={user.avatar_url}
                    alt="profil-picture"
                    className="rounded-full w-24 border-2 border-[rgba(240,246,252,0.1)]"
                />
                <div>
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                    <p className="text-[#8b949e] text-xl">{user.login}</p>
                </div>
            </div>
            <img src="" alt="" />
            <p className="text-xs">{user.bio}</p>
            <a href={user.blog} className="text-xs">
                {user.blog}
            </a>
            <p className="font-semibold text-xs">
                {user.followers}
                <span className="text-[#8b949e] font-normal ">followers</span> ·
                {user.following}{" "}
                <span className="text-[#8b949e] font-normal">following</span>{" "}
            </p>
        </div>
    )
}
