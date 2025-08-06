import { A } from '@solidjs/router'
import type { FlowComponent } from 'solid-js'
import type { LinkButtonProps } from '../types/component'
import rightArrow from '../assets/right-arrow.svg'

const LinkButton: FlowComponent<LinkButtonProps> = ({ icon, children, ...props }) => <>
    <A class='button' {...props}>
        {icon && <img class='icon' src={icon} alt='Button Icon' />}
        {children}
        <img class='arrow' src={rightArrow} alt='Right Arrow' />
    </A>
</>

export default LinkButton