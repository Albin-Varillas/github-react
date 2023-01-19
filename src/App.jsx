import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import User from "./pages/User"

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<User />} />
            </Routes>
        </div>
    )
}
