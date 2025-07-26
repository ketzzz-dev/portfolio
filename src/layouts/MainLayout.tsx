import { Suspense, type ParentComponent } from "solid-js"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout: ParentComponent = ({ children }) => <>   
    <Navbar />
    
    <main>
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    </main>

    <Footer />
</>

export default MainLayout