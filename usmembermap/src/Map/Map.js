import React from 'react';
import USAMap from 'react-usa-map';

const Map = () => {

    const mapHandler = (event) => {
        alert(event.target.dataset.name);
      };

    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
              <USAMap onClick={mapHandler} />
        </>
    )
}

export default Map