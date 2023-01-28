import { Routes, Route } from "react-router-dom"
import Followers from "./pages/Followers"
import Home from "./pages/Home"
import User from "./pages/User"

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<User />} />
                <Route path="/:name/followers" element={<Followers />} />
            </Routes>
        </div>
    )
}
