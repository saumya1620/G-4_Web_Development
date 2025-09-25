import ProductCardComponent from "../components/ProductCardComponent";
import { useEffect, useState } from "react";

// FilteredData = > JSX Render
// Create New Array => Render in JSX

const BodyComponent = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log("Product", productDetails)


  useEffect(() => {
      async function fetchData(){
        const data =  await fetch("https://dummyjson.com/products");
        const res = await data.json();
        // console.log(res);
        setProductDetails(res.products);
    }
    fetchData()
  }, []);

  const filterProducts = () => {
    const filteredProduct = productDetails.filter((product) => {
      return product.rating > 4;
    });
    setFilteredData(filteredProduct);
    // console.log("FILTERED DATA",filteredData);
  };

  // const allProducts = () =>{
  //   setFilteredData(productDetails)
  // }

  return (
    <div id="body-container">
      <div id="search-box">
        <input placeholder="Search Here"></input>
        <button>Search</button>
      </div>

      {/* Filter Top Products whose Rating is more than 4  */}
      <div id="top-rated-products">
        <button onClick={filterProducts}>Top Rated Products</button>
      </div>
      {/* <div id="all-products">
        <button onClick={allProducts}>All Products</button>
      </div> */}
      <div id="product-detail-card">
        {
          filteredData.length === 0 ?
         (productDetails.map((product) => {
              // console.log(product)
              return <ProductCardComponent key={product.id} data={product} />;
            })):
            (filteredData.map((product) => {
              // console.log(product)
              return <ProductCardComponent key={product.id} data={product} />;
            }))
       }
      </div>
    </div>
  );
};

export default BodyComponent;