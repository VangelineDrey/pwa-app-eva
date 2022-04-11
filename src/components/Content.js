import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Content({name, description, children}) {
    const home = {
        color: 'black',
    }
    return (
        <div className="content" style={home}>
            <h1>{name}</h1>
            <p>{description}</p>
            {children}
         </div>
            );
           }
  
  export default Content;
  