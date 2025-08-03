import { Suspense, type ParentComponent } from 'solid-js'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout: ParentComponent = ({ children }) => <>   
    <Header />
    
    <main>
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    </main>

    <Footer />
</>

export default MainLayout