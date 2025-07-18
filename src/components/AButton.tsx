import { A, type AnchorProps } from "@solidjs/router"
import type { ResolvedChildren } from "solid-js"
import rightArrow from "../assets/right-arrow.svg"
import "./Button.css"

export type AButtonProps = {
    icon?: string;
    children?: ResolvedChildren
}

export default function AButton({ icon, children, ...props }: AButtonProps & AnchorProps) {
    return <A class="button" {...props}>
        {icon && <img class="icon" src={icon} alt="Button Icon" />}
        {children}
        <img class="arrow" src={rightArrow} alt="Right Arrow" />
    </A>
}