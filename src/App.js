import Card from "./card"
import React from "react";
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCart } from '@fortawesome/free-solid-svg-icons'


function App() {
  
  const [productdata ,setProductdata] = React.useState([])

  React.useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then((response) =>response.json())
      .then((data)=>setProductdata(data) )
    }, []);

   const products = productdata.map((product)=>{
    return   product.price <64 &&  product.price > 10.99?
     (<Card product={product}  key={product.id}/> ) : null}
   )
 
 

  return (
   <div className="page">
    <div className="product-card">{products}</div>
       
   </div>
  );
}

export default App;