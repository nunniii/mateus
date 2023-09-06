import { Dropdown } from './Dropdown';

import talkLinks from "../data/talk_links.json"
import notesLinks from "../data/notes_links.json"


export function Nav(){
    return (
        <nav>
            <ul id="nav-menu">
                <li><a href="#">/</a></li>
                <li><Dropdown links={talkLinks} title="/talk"/></li>
                <li><Dropdown links={notesLinks} title="/notes"/></li>
            </ul>
        </nav>
    )
}