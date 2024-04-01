import React from "react";
import Circles from "./Circles";


function WhiteRectangle ({name, level}) {
    return (
        <div style={style}>
            <div style={nameCont}>
                {name} <br/>
                {level}
            </div>
            <div>
                <Circles />
            </div>
        </div>
    )
}

const style = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '10px',
    margin: '10px',
    borderRadius: '15px',
    
  };
  
  const nameCont = {
    color: 'rgba(112, 112, 112, 1)',
    width: '90%',
    height: '90%',
    opacity: '1',
    flex: '1',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
     }
  
  const circlesContainer = {
    display: 'flex',
  };

export default WhiteRectangle;