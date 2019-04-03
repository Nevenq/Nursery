import React from 'react'
import error from '../../images/404-error.svg'
import './NoMatch.css'

export const NoMatch = () =>(
  <div className='container error'>
      <img src={error} alt="error"/>
  </div>
);