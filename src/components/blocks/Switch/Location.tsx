
import { SvgLocation } from "./SvgLocation"
import  map  from '../../../assets/905480454.jpeg'

export function Location(){
    return (
        <div className="card" id="location-card">
            <img src={map} alt="Location" />
            <div id="sp-i-lc">
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SvgLocation />&nbsp; Divinópolis, BR</p>
            </div>
        </div>
    )
}
