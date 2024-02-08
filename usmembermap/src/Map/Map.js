import React, {useState} from 'react';
import USAMap from 'react-usa-map';

const Map = () => {

    // const [stateHoveredState, setHoveredState] = useState(null)

    // const handleHoverEnter = (e) => {
    //     setHoveredState(e.target.dataset.name)
    //     console.log(stateHoveredState)
    // }

    // const handleHoverExit = () => {
    //     setHoveredState(null)
    // }

    const mapHandler = (e) => {
        if (e.target.dataset.name === "CA"){
            alert("California") 
        } else if (e.target.dataset.name === "NY") {
            alert("New York")
        } else if (e.target.dataset.name === "OR") {
            alert("Oregon")
        } else {
          alert(e.target.dataset.name)
        }
        console.log(e.target.dataset.name)
      };

    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
              <USAMap 
              onClick={mapHandler} 
            //   onMouseEnter={handleHoverEnter}
            //   onMouseLeave={handleHoverExit}
            onMouseEnter={(e) => console.log(e)}
              />
        </>
    )
}

export default Map