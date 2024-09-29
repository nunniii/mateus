import '../styles/Banners.scss';
import GenshinBanner from '../assets/2024-09-12_01-04-23.png';
import test from '../assets/905480454.jpeg'

export function Banners() {
    return (
        <div id="Banners">
            <div className='banner' id='GenshinBanner'>
                <img className='h-64' src={GenshinBanner} alt="Banner Genshin Impact" />
                <div className="overlay">
                    <p>Texto que aparece ao passar o mouse</p>
                </div>
            </div>

            <div className='banner' id='Stars'>
                <img src={test} alt="Stars" />
                <div className="overlay">
                    <p>Texto que aparece ao passar o mouse</p>
                </div>
            </div>
        </div>
    );
}
