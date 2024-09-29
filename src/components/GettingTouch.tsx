import '../styles/GettingTouch.scss'

import { Eth } from './Eth'
import { Mail } from './Mail'

export function GettingTouch(){
    return (
        <div id="GettingTouch" className='section-card'>
            <h2>Getting touch</h2>
            

            <Mail />
            <Eth />

            {/* <div className="h-52 mt-10 flex justify-center">
                <a target="_blank" href="https://discord.com/users/760144171075371009">
                <img alt="Discord" src="https://lanyard-profile-readme.vercel.app/api/760144171075371009?bg=000000EE&hideTimestamp=true&idleMessage=Just%20chillin'%20at%20the%20moment..." />
                </a>
            </div> */}
        </div>
    )
}