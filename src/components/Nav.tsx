import { DropdownTalk } from './DropdownTalk';

import talkLinks from "../data/talk_links.json"
import notesLinks from "../data/notes_links.json"


export function Nav(){
    return (
        <nav>
            <ul id="nav-menu">
                <li><a href="#">/</a></li>
                <li><DropdownTalk links={talkLinks} title="/talk"/></li>
                <li><DropdownTalk links={notesLinks} title="/notes"/></li>
            </ul>
        </nav>
    )
}