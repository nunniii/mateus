import { DropdownTalk } from './DropdownTalk';

import links from "../data/links.json"


export function Nav(){
    return (
        <nav>
            <ul id="nav-menu">
                <li><a href="#">/</a></li>
                <li><DropdownTalk links={links}/></li>
                <li><a href="https://nunito-blog.vercel.app/">/notes</a></li>
            </ul>
        </nav>
    )
}