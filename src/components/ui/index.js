import React from 'react';
import './style.css';

const Card = (props) => {
  return(
    <div className="card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + ''})` ,   backgroundRepeat: 'no-repeat', width: props.width ? props.width: '100%' }} {...props}>
        {props.children}
    </div>
   )

 }

export default Card