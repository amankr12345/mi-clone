import { Link } from "react-router-dom"
import '../styles/HotAccessoriesMenu.css'
const HotAccessoriesMenu=()=>{
    return(
        <div className='HotAccessoriesMenu'>
            <Link className='HotAccessoriesLink' to='/music'>Music Store</Link>
            <Link className='HotAccessoriesLink' to='/smartDevices'>smartDevices</Link>
            <Link className='HotAccessoriesLink' to='/home'>home</Link>
            <Link className='HotAccessoriesLink' to='/lifeStyle'>lifeStyle</Link>
            <Link className='HotAccessoriesLink' to='/mobileaccessories'>mobileaccessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu