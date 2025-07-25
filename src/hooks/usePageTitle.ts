import { createEffect } from "solid-js";

export function useSetPageTitle(title?: string) {
    createEffect(() => {
        document.title = title ? title + " • Ketzzz" : "Ketzzz"
    })
}