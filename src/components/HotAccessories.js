import HotItemCard from "./HotItemCard"
import '../styles/HotAccessories.css'
const HotAccessories=({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileaccessories,mobileaccessoriesCover})=>{
    return(
        <div className='HotAccessories'>
            <div>
                <img src={musicCover || smartDeviceCover||homeCover || lifestyleCover || mobileaccessoriesCover} alt='Cober'/>
            </div>
            <div>
                {
                   music && music.map((item,index)=>(
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index}/>
                    ))
                }
                {
                    smartDevice && smartDevice.map((item,index)=>(
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index}/>
                    ))
                }
                {
                   home && home.map((item,index)=>(
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index}/>
                    ))
                }
                {
                   lifestyle && lifestyle.map((item,index)=>(
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index}/>
                    ))
                }
                {
                   mobileaccessories && mobileaccessories.map((item,index)=>(
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index}/>
                    ))
                }
                <HotItemCard image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'/>
            </div>
        </div>
    )
}

export default HotAccessories