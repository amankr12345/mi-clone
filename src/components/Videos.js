import VideoCard from "./VideoCard"
import '../styles/videos.css'
const Videos=({star})=>{
    console.log(star)
    return(
        <div className='videos'>
        {
            star.map((item,index)=>(
                <VideoCard key={item.image} index={index} name={item.name} image={item.image}/>
            ))
        }
        </div>
    )
}

export default Videos