import { NavLink } from "react-router-dom"
import { formetPrice } from "./Utiliti/Helper"


const Product = (data) => {
    const {id,image,name,price,category} = data
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt="" />
                <figcaption className="caption">{category}</figcaption>
                
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price">{formetPrice(price)}</p>
                </div>
            </div>
        </div>

    </NavLink>
  )
}

export default Product