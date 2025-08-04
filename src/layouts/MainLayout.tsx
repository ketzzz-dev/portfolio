import { Suspense, type ParentComponent } from 'solid-js'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InteractiveBackground from '../components/InteractiveBackground'

const MainLayout: ParentComponent = ({ children }) => <>   
    <InteractiveBackground />
    <Header />
    
    <main>
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    </main>

    <Footer />
</>

export default MainLayout