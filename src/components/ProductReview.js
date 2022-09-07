import '../styles/ProductReview.css'
import ProductReviewCard from './ProductReviewCard'
const Productreview=({star})=>{
    return(
        <div className='ProductReviews'>
                {
                    star.map((item,index)=>(
                        <ProductReviewCard key={item.image} index={index} name={item.name} price={item.price}
                            review={item.review} image={item.image}/>
                    ))
                }
        </div>
    )
}

export default Productreview