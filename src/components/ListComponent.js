import React from 'react'; 
import Paises from './Paises';

const ListComponent = (props) => { 
  
  return ( 
    
    <div className="Component"> 
    
      <h1>{props.text}</h1> 
      {/* <Paises name={'jose'}></Paises> */}
    </div> 
    
  ); 
  
}; 

export {ListComponent};
