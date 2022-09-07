import '../styles/starProduct.css'

const StarProduct=({star})=>{
    console.log(star)
    return(
        <div className='starProduct'>
            <div>
                <a href={star[0].url}><img src={star[0].image} alt='list product'/>
                </a>
            </div>
            <div>
                <a href={star[1].url}><img src={star[1].image} alt='list product'/>
                </a>
                <a href={star[2].url}><img src={star[2].image} alt='list product'/>
                </a>
                <a href={star[3].url}><img src={star[3].image} alt='list product'/>
                </a>
            </div>
        </div>
    )
}
export default StarProduct