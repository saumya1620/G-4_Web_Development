const ProductCardComponent = (props) =>{
  // console.log(props?.data[0]?.title)

  //DESTRUCUTURE YOUR DATA
  //ALWAYS USE OPTIONAL CHAINING
  const { id,title,price,discountPercentage,rating} = props?.data;
  return (
    <div id="product-container">
      <div id="img-product">
        <img src={props?.data?.images}></img>
      </div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{price}</span>
      <span>{discountPercentage}</span>
      <span>{rating}</span>
      <button> ADD TO CART</button>
      <button> BUY NOW</button>
    </div>
  )
}

export default ProductCardComponent