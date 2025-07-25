import { Suspense, type ParentComponent } from "solid-js"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"

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