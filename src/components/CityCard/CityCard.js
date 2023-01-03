import React from 'react'
import './CityCard.css'
import {Link} from 'react-router-dom'

function CityCard({imageUrl, imgHeight, city, cardStyle, imgRadius}) {

    const imageStyle={
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        height: imgHeight,
        width: "400px",
        margin: "20px",
        borderRadius: imgRadius
    }

  return (
    <Link to={`/cityDetails/${city.id}`} className={cardStyle}>
        <div style={imageStyle}>
            <div className="city-card-container">
                <p className="city-name">{city.name}</p>
            </div>
        </div>
    </Link>
  )
}

export default CityCard