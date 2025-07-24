import { A, type AnchorProps } from "@solidjs/router"
import type { FlowComponent } from "solid-js"
import rightArrow from "../assets/right-arrow.svg"
import "./Button.css"

export interface AButtonProps {
    icon?: string
}

const AButton: FlowComponent<AButtonProps & AnchorProps> = ({ icon, children, ...props }) => {
    return <A class="button" {...props}>
        {icon && <img class="icon" src={icon} alt="Button Icon" />}
        {children}
        <img class="arrow" src={rightArrow} alt="Right Arrow" />
    </A>
}

export default AButton