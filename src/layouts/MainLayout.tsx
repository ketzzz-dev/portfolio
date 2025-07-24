import { Suspense, type ParentProps } from "solid-js"
import Navbar from "../components/Navbar"



export default function MainLayout(props: ParentProps) {
    return <>
        <Navbar />
        
        <main>
            <Suspense fallback={<h3>Loading...</h3>}>
                {props.children}
            </Suspense>
        </main>

        {/* Footer would go here */}
    </>
}
