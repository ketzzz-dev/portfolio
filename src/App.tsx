import { Route, Router } from "@solidjs/router"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import "./App.css"

export default function App() {
    return <>
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
        </Router>
    </>
}