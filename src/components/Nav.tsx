import { talk } from '../scripts/comming_soon';


export function Nav(){
    return (
        <nav>
            <ul id="nav-menu">
                <li><a href="#">/</a></li>
                <li><a href="#" onClick={talk}>/talk</a></li>
                <li><a href="https://nunito-blog.vercel.app/">/notes</a></li>
            </ul>
        </nav>
    )
}