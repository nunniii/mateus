
import { MdEmail } from "react-icons/md";

import '../styles/ContactCard.scss'

export function Mail(){
    return (
        <a href="mailto:mateusnss@proton.me">
            <div id='ContactCard'>
                <div className='just-a-margin'>
                <MdEmail size={30}/>
                </div>
                <div >
                    <div className='title'>Quer conversar sobre algo? Me envie um email:</div>
                    <p>mateusnss@proton.me</p>
                </div>
            </div>
        </a>
    )
}

