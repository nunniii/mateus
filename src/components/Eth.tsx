


import '../styles/ContactCard.scss'
import type { SVGProps } from 'react';


const TokenEthereum = (props: SVGProps<SVGSVGElement>) => {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" {...props}><path  d="M12 2v7.39l6.25 2.796zm0 0L5.75 12.185L12 9.39zm0 14.975V22l6.25-8.65zM12 22v-5.025L5.75 13.35z"></path><path  d="m12 15.81l6.25-3.624L12 9.39zm-6.25-3.624L12 15.81V9.39z"></path><path  fillRule="evenodd" d="m12 15.81l-6.25-3.624L12 2l6.25 10.185zm-5.833-3.92l5.735-9.344v6.795zm-.086.255l5.82-2.585v5.96zm6.02-2.585v5.96l5.815-3.375zm0-.22l5.736 2.55L12.1 2.547z" clipRule="evenodd"></path><path fillRule="evenodd" d="m12 16.897l-6.25-3.55L12 22l6.25-8.654zm-5.55-2.926l5.45 3.101v4.45zm5.65 3.101v4.45l5.45-7.551z" clipRule="evenodd"></path></svg>);
}



export function Eth(){
    return (
        <div id='ContactCard'>
            <div className='just-a-margin'>
                <TokenEthereum />
            </div>
            <div id="Adress">
                <div className='title'>Primary ETH Address</div>
                <p>0xa14863710db4ad5Cc54CC4e2e4E4FD26fD75A509</p>
            </div>
        </div>
    )
}

