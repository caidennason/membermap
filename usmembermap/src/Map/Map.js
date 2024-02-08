import React, {useState} from 'react';
import USAMap from 'react-usa-map';
import StateDialog from './StateDialog';

const Map = () => {

    // const [stateHoveredState, setHoveredState] = useState(null)
    const [usState, setUsState] = useState(null)
    const [dialogState, setDialogState] = useState(false)

    const handleDialogOpen = () => {
        setDialogState(true)
    }

    const handleDialogClose = () => {
        setDialogState(false)
    }

    // const handleHoverEnter = (e) => {
    //     setHoveredState(e.target.dataset.name)
    //     console.log(stateHoveredState)
    // }

    // const handleHoverExit = () => {
    //     setHoveredState(null)
    // }

    const mapHandler = (e) => {
        handleDialogOpen()
        if (e.target.dataset.name === "CA"){
            setUsState("California")
            // alert("California") 
        } else if (e.target.dataset.name === "NY") {
            // alert("New York")
            setUsState("New York")
        } else if (e.target.dataset.name === "OR") {
            // alert("Oregon") 
            setUsState("Oregon")
        } else if (e.target.dataset.name === "WA") {
            // alert("Washington")
            setUsState("Washington")
        } else if (e.target.dataset.name === "ID") {
            // alert("Idaho")
            setUsState("Idaho")
        } else if (e.target.dataset.name === "UT") {
            // alert("Utah")
            setUsState("Idaho")
        } else if (e.target.dataset.name === "NV") {
            // alert("Nevada")
            setUsState("Nevada")
        } else if (e.target.dataset.name === "AZ") {
            // alert("Arizona")
            setUsState("Arizona")
        } else if (e.target.dataset.name === "MT") {
            // alert("Montana")
            setUsState("Montana")
        } else if (e.target.dataset.name === "WY") {
            // alert("Wyoming")
            setUsState("Wyoming")
        } else if (e.target.dataset.name === "CO") {
            // alert("Colorado")
            setUsState("Colorado")
        } else if (e.target.dataset.name === "NM") {
            // alert("New Mexico")
            setUsState("New Mexico")
        } else if (e.target.dataset.name === "ND") {
            // alert("North Dakota")
            setUsState("North Dakota")
        } else if (e.target.dataset.name === "SD") {
            // alert("South Dakota")
            setUsState("South Dakota")
        } else if (e.target.dataset.name === "NE") {
            // alert("Nebraska")
            setUsState("Nebraska")
        } else if (e.target.dataset.name === "KS") {
            // alert("Kansas")
            setUsState("Kansas")
        } else if (e.target.dataset.name === "OK") {
            // alert("Oklahoma")
            setUsState("Oklahoma")
        } else if (e.target.dataset.name === "TX") {
            // alert("Texas")
            setUsState("Texas")
        } else if (e.target.dataset.name === "MN") {
            // alert("Minnesota")
            setUsState("Minnesota")
        } else if (e.target.dataset.name === "IA") {
            // alert("Iowa")
            setUsState("Iowa")
        } else if (e.target.dataset.name === "MO") {
            // alert("Missouri")
            setUsState("Missouri")
        } else if (e.target.dataset.name === "AR") {
            // alert("Arkansas")
            setUsState("Arkansas")
        } else if (e.target.dataset.name === "LA") {
            // alert("Louisiana")
            setUsState("Louisiana")
        } else if (e.target.dataset.name === "MI") {
            // alert("Michigan")
            setUsState("Michigan")
        } else if (e.target.dataset.name === "IL") {
            // alert("Illinois")
            setUsState("Illinois")
        } else if (e.target.dataset.name === "KY") {
            // alert("Kentucky")
            setUsState("Kentucky")
        } else if (e.target.dataset.name === "TN") {
            // alert("Tennessee")
            setUsState("Tennessee")
        } else if (e.target.dataset.name === "MS") {
            // alert("Mississippi")
            setUsState("Mississippi")
        } else if (e.target.dataset.name === "AL") {
            // alert("Alabama")
            setUsState("Alabama")
        } else if (e.target.dataset.name === "GA") {
            // alert("Georgia")
            setUsState("Georgia")
        } else if (e.target.dataset.name === "FL") {
            // alert("Florida")
            setUsState("Florida")
        } else if (e.target.dataset.name === "SC") {
            // alert("South Carolina")
            setUsState("South Carolina")
        } else if (e.target.dataset.name === "NC") {
            // alert("North Carolina")
            setUsState("North Carolina")
        } else if (e.target.dataset.name === "VA") {
            // alert("Virginia")
            setUsState("Virginia")
        } else if (e.target.dataset.name === "WV") {
            // alert("West Virginia")
            setUsState("West Virginia")
        } else if (e.target.dataset.name === "MD") {
            // alert("Maryland")
            setUsState("Maryland")
        } else if (e.target.dataset.name === "PA") {
            // alert("Pennsylvania")
            setUsState("Pennsylvania")
        } else if (e.target.dataset.name === "NJ") {
            // alert("New Jersey")
            setUsState("New Jersey")
        } else if (e.target.dataset.name === "MD") {
            // alert("Maryland")
            setUsState("Maryland")
        } else if (e.target.dataset.name === "CT") {
            // alert("Connecticut")
            setUsState("Connecticut")
        } else if (e.target.dataset.name === "RI") {
            // alert("Rhode Island")
            setUsState("Rhode Island")
        } else if (e.target.dataset.name === "VT") {
            // alert("Vermont")
            setUsState("Vermont")
        } else if (e.target.dataset.name === "NH") {
            // alert("New Hampshire")
            setUsState("New Hampshire")
        } else if (e.target.dataset.name === "MD") {
            // alert("Maryland")
            setUsState("Maryland")
        } else if (e.target.dataset.name === "ME") {
            // alert("Maine")
            setUsState("Maine")
        } else if (e.target.dataset.name === "AK") {
            // alert("Alaska")
            setUsState("Alaska")
        } else if (e.target.dataset.name === "HI") {
            // alert("Hawaii")
            setUsState("Hawaii")
        } else if (e.target.dataset.name === "WI") {
            // alert("Pennsylvania")
            setUsState("Wisconsin")
        } else {
          alert(e.target.dataset.name)
        }
        console.log(usState)
      };

    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>{usState}</p>
              <USAMap 
                onClick={mapHandler} 
            //   onMouseEnter={handleHoverEnter}
            //   onMouseLeave={handleHoverExit}
                onMouseEnter={(e) => console.log(e)}
              />
              <StateDialog dialogState={dialogState} handleDialogClose={handleDialogClose} usState={usState}/> 
        </>
    )
}

export default Map