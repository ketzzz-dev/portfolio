import { onMount, type Component } from "solid-js"

const Loading: Component = () => {
    onMount(() => {
        console.log("Loading...")
    })

    return <div class="loading-container">
        <h3>Loading awesome content...</h3>
    </div>
}

export default Loading