import { type ParentComponent } from 'solid-js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InteractiveBackground from '../components/InteractiveBackground'

const MainLayout: ParentComponent = ({ children }) => <>   
    <Header />
    <InteractiveBackground />
    
    <main>{children}</main>

    <Footer />
</>

export default MainLayout