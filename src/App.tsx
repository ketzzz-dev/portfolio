import { Route, Router } from "@solidjs/router"
import "./App.css"
import { lazy, type Component } from "solid-js"
import MainLayout from "./layouts/MainLayout"

const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const NotFound = lazy(() => import("./pages/NotFound"))

const App: Component = () => {
    return <Router root={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="*" component={NotFound} />
    </Router>
}

export default App