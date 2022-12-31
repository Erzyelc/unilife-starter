import React from 'react'
import './Homepage.css'
import axios from 'axios';

function Homepage() {

    React.useEffect(
      ()=> {
        axios.get(` https://unilife-server.herokuapp.com/cities?limit=9`)
        .then(res => {
          console.log(res.data.response)
        })
        .catch(err => console.log(err))
      }
    )


  return (
    <div className="homepage-container">
      <h2 className="accomodations-header">Student accomodations in our top cities</h2>
    </div>
  )
}

export default Homepage