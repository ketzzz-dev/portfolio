import { Suspense, type ParentComponent } from "solid-js"
import Navbar from "../components/Navbar"
import "./MainLayout.css"
import Loading from "../components/Loading"

const MainLayout: ParentComponent = ({ children }) => <>   
    <Navbar />
    
    <main>
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    </main>

    {/* Footer would go here */}
</>

export default MainLayout