import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa"

const Star=(value)=> {
  return (
 <>
    <span>
        {
            value>=1?React(
                <FaStar/>
            ) : value >= 0.5 ? (

            <FaStarHalfAlt/>) : (<FaRegStar/>)
        }
    </span>
    <span>
        {
            value>=3?React(
                <FaStar/>
            ) : value >= 2.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
        }
    </span>
    <span>
        {
            value>=4?React(
                <FaStar/>
            ) : value >= 3.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
        }
    </span>
    <span>
        {
            value>=5?React(
                <FaStar/>
            ) : value >= 4.5 ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
        }
    </span>
 </>
  )
}

export default Star;