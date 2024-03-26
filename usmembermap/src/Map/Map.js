import React, {useState, useEffect} from 'react';
import USAMap from 'react-usa-map';
import StateDialog from './StateDialog';

const Map = () => {

    const [usState, setUsState] = useState(null)
    const [dialogState, setDialogState] = useState(false)
    const [seniorSenatorCID, setSeniorSenatorCID] = useState(null)
    const [seniorSenatorName, setSeniorSenatorName] = useState(null)
    const [juniorSenatorCID, setJuniorSenatorCID] = useState(null)
    const [juniorSenatorName, setJuniorSenatorName] = useState(null)
    const [financeInformation, setFinanceInformation] = useState([])

    console.log(juniorSenatorCID, juniorSenatorName)

    useEffect(() => {
        if (seniorSenatorCID) {
            sendSenatorInformation(seniorSenatorCID)
        }
    }, [seniorSenatorCID])


    const sendSenatorInformation = (seniorSenatorCID) => {
        return fetch(`http://localhost:3000/api_data?cid=${seniorSenatorCID}`) 
        .then((res) => {
            if (!res.ok) {
                console.log(res)
                return res.json()
                .then((errorData) => {
                    throw new Error(errorData.error)
                })
            }
            console.log(res); 
            return res.json();
        })
        .then((data) => setFinanceInformation(data));
    }

    console.log(financeInformation)

    const handleDialogOpen = () => {
        setDialogState(true)
    }

    const handleDialogClose = () => {
        setDialogState(false)
    }

    const mapHandler = (e) => {
        handleDialogOpen()
        if (e.target.dataset.name === "CA"){
            setUsState("California")
            setSeniorSenatorCID('N00007364')
            setSeniorSenatorName('Dianne Feinstein')
            setJuniorSenatorCID('N00047888')
            setJuniorSenatorName('Alex Padilla')
            // sendSenatorInformation(seniorSenatorCID)
        } else if (e.target.dataset.name === "NY") {
            setUsState("New York")
            setSeniorSenatorCID('N00001093')
            setSeniorSenatorName('Chuck Schumer')
        } else if (e.target.dataset.name === "OR") {
            setUsState("Oregon")
        } else if (e.target.dataset.name === "WA") {
            setUsState("Washington")
        } else if (e.target.dataset.name === "ID") {
            setUsState("Idaho")
        } else if (e.target.dataset.name === "UT") {
            setUsState("Idaho")
        } else if (e.target.dataset.name === "NV") {
            setUsState("Nevada")
        } else if (e.target.dataset.name === "AZ") {
            setUsState("Arizona")
        } else if (e.target.dataset.name === "MT") {
            setUsState("Montana")
        } else if (e.target.dataset.name === "WY") {
            setUsState("Wyoming")
        } else if (e.target.dataset.name === "CO") {
            setUsState("Colorado")
        } else if (e.target.dataset.name === "NM") {
            setUsState("New Mexico")
        } else if (e.target.dataset.name === "ND") {
            setUsState("North Dakota")
        } else if (e.target.dataset.name === "SD") {
            setUsState("South Dakota")
        } else if (e.target.dataset.name === "NE") {
            setUsState("Nebraska")
        } else if (e.target.dataset.name === "KS") {
            setUsState("Kansas")
        } else if (e.target.dataset.name === "OK") {
            setUsState("Oklahoma")
        } else if (e.target.dataset.name === "TX") {
            setUsState("Texas")
        } else if (e.target.dataset.name === "MN") {
            setUsState("Minnesota")
        } else if (e.target.dataset.name === "IA") {
            setUsState("Iowa")
        } else if (e.target.dataset.name === "MO") {
            setUsState("Missouri")
        } else if (e.target.dataset.name === "AR") {
            setUsState("Arkansas")
        } else if (e.target.dataset.name === "LA") {
            setUsState("Louisiana")
        } else if (e.target.dataset.name === "MI") {
            setUsState("Michigan")
        } else if (e.target.dataset.name === "IL") {
            setUsState("Illinois")
        } else if (e.target.dataset.name === "KY") {
            setUsState("Kentucky")
        } else if (e.target.dataset.name === "TN") {
            setUsState("Tennessee")
        } else if (e.target.dataset.name === "MS") {
            setUsState("Mississippi")
        } else if (e.target.dataset.name === "AL") {
            setUsState("Alabama")
        } else if (e.target.dataset.name === "GA") {
            setUsState("Georgia")
        } else if (e.target.dataset.name === "FL") {
            setUsState("Florida")
        } else if (e.target.dataset.name === "SC") {
            setUsState("South Carolina")
        } else if (e.target.dataset.name === "NC") {
            setUsState("North Carolina")
        } else if (e.target.dataset.name === "VA") {
            setUsState("Virginia")
        } else if (e.target.dataset.name === "WV") {
            setUsState("West Virginia")
        } else if (e.target.dataset.name === "MD") {
            setUsState("Maryland")
        } else if (e.target.dataset.name === "PA") {
            setUsState("Pennsylvania")
        } else if (e.target.dataset.name === "NJ") {
            setUsState("New Jersey")
        } else if (e.target.dataset.name === "MD") {
            setUsState("Maryland")
        } else if (e.target.dataset.name === "CT") {
            setUsState("Connecticut")
        } else if (e.target.dataset.name === "RI") {
            setUsState("Rhode Island")
        } else if (e.target.dataset.name === "VT") {
            setUsState("Vermont")
        } else if (e.target.dataset.name === "NH") {
            setUsState("New Hampshire")
        } else if (e.target.dataset.name === "MD") {
            setUsState("Maryland")
        } else if (e.target.dataset.name === "ME") {
            setUsState("Maine")
        } else if (e.target.dataset.name === "AK") {
            setUsState("Alaska")
        } else if (e.target.dataset.name === "HI") {
            setUsState("Hawaii")
        } else if (e.target.dataset.name === "WI") {
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
              <USAMap 
                onClick={mapHandler} 
              />
              <StateDialog setDialogState={setDialogState} dialogState={dialogState} handleDialogClose={handleDialogClose} usState={usState} seniorSenatorName={seniorSenatorName} juniorSenatorName={juniorSenatorName}/> 
        </>
    )
}

export default Map