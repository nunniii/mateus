
import { SvgLocation } from "./SvgLocation"


export function Location(){
    return (
        <div className="card" id="location-card">
            <img src="./public/assets/905480454.jpeg" alt="Location" />
            <div id="sp-i-lc">
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SvgLocation />&nbsp; Divinópolis, BR</p>
            </div>
        </div>
    )
}
