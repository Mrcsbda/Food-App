import React from 'react'
import "./error.scss"
const Error = () => {
  return (
    <section className='error-component'>
        <figure className="error-component__image-container">
            <img src="../images/Error.svg" alt="error image" className='error-component__image'/>
        </figure>
        <h1 className="error-component__title">Oops! sorry, there was an error searching for the information you requested! please try again later.</h1>
    </section>
  )
}

export default Error