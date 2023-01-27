
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
  const [isDescription ,  setisDescription] =React.useState(false)
  const toggle =() =>{
     setisDescription(!isDescription)
     console.log(isDescription)
  }
  const add=()=>{console.log("added")}
  const element = <FontAwesomeIcon icon={faCartShopping} className="cart-icon" onClick={add} />
    return(
        <div className="card">
        
          <img src={props.product.image} alt=""  className="productimg"/>
          <div className="content">
          <br/>
          <h4>{props.product.title}</h4>
          </div>
          <br/>
          <br/>
          <br/>
          <span><h5>price: {props.product.price}$ </h5>
           <span><button onClick={toggle}>{isDescription ? "show less" : "show more"}</button></span>
           {element}
          </span>
           {isDescription ? <p>{props.product.description}</p>:null}
        </div>
    )
}