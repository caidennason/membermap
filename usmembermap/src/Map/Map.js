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
        if (seniorSenatorCID && juniorSenatorCID) {
            sendSenatorInformation(seniorSenatorCID, juniorSenatorCID)
        }
    }, [seniorSenatorCID, juniorSenatorCID])


    const sendSenatorInformation = (seniorSenatorCID) => {
        return fetch(`http://localhost:3000/api_data?cid=${seniorSenatorCID}&cid2=${juniorSenatorCID}`) 
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
        } else if (e.target.dataset.name === "NY") {
            setUsState("New York")
            setSeniorSenatorCID('N00001093')
            setSeniorSenatorName('Chuck Schumer')
            setJuniorSenatorCID('N00027658')
            setJuniorSenatorName('Kirsten Gillibrand')
        } else if (e.target.dataset.name === "OR") {
            setUsState("Oregon")
            setSeniorSenatorCID('N00007724')
            setSeniorSenatorName('Ron Wyden')
            setJuniorSenatorCID('N00029303')
            setJuniorSenatorName('Jeff Merkley')
        } else if (e.target.dataset.name === "WA") {
            setUsState("Washington")
            setSeniorSenatorCID('N00007876')
            setSeniorSenatorName('Patty Murray')
            setJuniorSenatorCID('N00007836')
            setJuniorSenatorName('Maria Cantwell')
        } else if (e.target.dataset.name === "ID") {
            setUsState("Idaho")
            setSeniorSenatorCID('N00006267')
            setSeniorSenatorName('Mike Crapo')
            setJuniorSenatorCID('N00029441')
            setJuniorSenatorName('James Risch')
        } else if (e.target.dataset.name === "UT") {
            setUsState("Utah")
            setSeniorSenatorCID('N00031696')
            setSeniorSenatorName('Mike Lee')
            setJuniorSenatorCID('N00000286')
            setJuniorSenatorName('Mitt Romney')
        } else if (e.target.dataset.name === "NV") {
            setUsState("Nevada")
            setSeniorSenatorCID('N00037161')
            setSeniorSenatorName('Catherine Cortez-Masto')
            setJuniorSenatorCID('N00038734')
            setJuniorSenatorName('Jacky Rosen')
        } else if (e.target.dataset.name === "AZ") {
            setUsState("Arizona")
            setSeniorSenatorCID('N00033983')
            setSeniorSenatorName('Kyrsten Sinema')
            setJuniorSenatorCID('N00044223')
            setJuniorSenatorName('Mark Kelly')
        } else if (e.target.dataset.name === "MT") {
            setUsState("Montana")
            setSeniorSenatorCID('N00027605')
            setSeniorSenatorName('John Tester')
            setJuniorSenatorCID('N00033054')
            setJuniorSenatorName('Steve Daines')
        } else if (e.target.dataset.name === "WY") {
            setUsState("Wyoming")
            setSeniorSenatorCID('N00006236')
            setSeniorSenatorName('John Barrasso')
            setJuniorSenatorCID('N00029788')
            setJuniorSenatorName('Cynthia Lummis')
        } else if (e.target.dataset.name === "CO") {
            setUsState("Colorado")
            setSeniorSenatorCID('N00030608')
            setSeniorSenatorName('Michael Bennet')
            setJuniorSenatorCID('N00044206')
            setJuniorSenatorName('John Hickenlooper')
        } else if (e.target.dataset.name === "NM") {
            setUsState("New Mexico")
            setSeniorSenatorCID('N00029835')
            setSeniorSenatorName('Martin Heinrich')
            setJuniorSenatorCID('N00029562')
            setJuniorSenatorName('Ben Ray Juján')
        } else if (e.target.dataset.name === "ND") {
            setUsState("North Dakota")
            setSeniorSenatorCID('N00031688')
            setSeniorSenatorName('John Hoeven')
            setJuniorSenatorCID('N00004614')
            setJuniorSenatorName('Kevin Cramer')
        } else if (e.target.dataset.name === "SD") {
            setUsState("South Dakota")
            setSeniorSenatorCID('N00004572')
            setSeniorSenatorName('John Thune')
            setJuniorSenatorCID('N00035187')
            setJuniorSenatorName('Mike Rounds')
        } else if (e.target.dataset.name === "NE") {
            setUsState("Nebraska")
            setSeniorSenatorCID('N00004572')
            setSeniorSenatorName('John Thune')
            setJuniorSenatorCID('N00035187')
            setJuniorSenatorName('Mike Rounds')
        } else if (e.target.dataset.name === "KS") {
            setUsState("Kansas")
            setSeniorSenatorCID('N00005282')
            setSeniorSenatorName('Jerry Moran')
            setJuniorSenatorCID('N00037034')
            setJuniorSenatorName('Roger Marshall')
        } else if (e.target.dataset.name === "OK") {
            setUsState("Oklahoma")
            setSeniorSenatorCID('N00031129')
            setSeniorSenatorName('James Lankford')
            setJuniorSenatorCID('N00033410')
            setJuniorSenatorName('Markwayne Mullin')
        } else if (e.target.dataset.name === "TX") {
            setUsState("Texas")
            setSeniorSenatorCID('N00024852')
            setSeniorSenatorName('John Cornyn')
            setJuniorSenatorCID('N00033085')
            setJuniorSenatorName('Ted Cruz')
        } else if (e.target.dataset.name === "MN") {
            setUsState("Minnesota")
            setSeniorSenatorCID('N00027500')
            setSeniorSenatorName('Amy Klobuchar')
            setJuniorSenatorCID('N00042353')
            setJuniorSenatorName('Tina Smith')
        } else if (e.target.dataset.name === "IA") {
            setUsState("Iowa")
            setSeniorSenatorCID('N00001758')
            setSeniorSenatorName('Chuck Grassley')
            setJuniorSenatorCID('N00035483')
            setJuniorSenatorName('Joni Ernst')
        } else if (e.target.dataset.name === "MO") {
            setUsState("Missouri")
            setSeniorSenatorCID('N00041620')
            setSeniorSenatorName('Josh Hawley')
            setJuniorSenatorCID('N00048414')
            setJuniorSenatorName('Eric Schmitt')
        } else if (e.target.dataset.name === "AR") {
            setUsState("Arkansas")
            setSeniorSenatorCID('N00013873')
            setSeniorSenatorName('John Boozman')
            setJuniorSenatorCID('N00033363')
            setJuniorSenatorName('Tom Cotton')
        } else if (e.target.dataset.name === "LA") {
            setUsState("Louisiana")
            setSeniorSenatorCID('N00030245')
            setSeniorSenatorName('Bill Cassidy')
            setJuniorSenatorCID('N00026823')
            setJuniorSenatorName('John Kennedy')
        } else if (e.target.dataset.name === "MI") {
            setUsState("Michigan")
            setSeniorSenatorCID('N00004118')
            setSeniorSenatorName('Debbie Stabenow')
            setJuniorSenatorCID('N00029277')
            setJuniorSenatorName('Gary Peters')
        } else if (e.target.dataset.name === "IL") {
            setUsState("Illinois")
            setSeniorSenatorCID('N00004981')
            setSeniorSenatorName('Dick Durbin')
            setJuniorSenatorCID('N00027860')
            setJuniorSenatorName('Tammy Duckworth')
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