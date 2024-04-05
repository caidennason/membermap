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

    const seniorSenatorIndustries = financeInformation && financeInformation.response_json ? financeInformation.response_json.response.industries.industry.map((data) => data['@attributes']) : []
    const juniorSenatorIndustries =financeInformation && financeInformation.response2_json ? financeInformation.response2_json.response.industries.industry.map((data) => data['@attributes']) : []

    console.log('senior industries: ', seniorSenatorIndustries)
    console.log('junior industries: ', juniorSenatorIndustries.map((ind) => ind.industry_name))

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
            setSeniorSenatorCID('N00003389')
            setSeniorSenatorName('Mitch McConnell')
            setJuniorSenatorCID('N00030836')
            setJuniorSenatorName('Rand Paul')
        } else if (e.target.dataset.name === "TN") {
            setUsState("Tennessee")
            setSeniorSenatorCID('N00003105')
            setSeniorSenatorName('Marcia Blackburn')
            setJuniorSenatorCID('N00045369')
            setJuniorSenatorName('Bill Hagerty')
        } else if (e.target.dataset.name === "MS") {
            setUsState("Mississippi")
            setSeniorSenatorCID('N00003280')
            setSeniorSenatorName('Roger Wicker')
            setJuniorSenatorCID('N00043298')
            setJuniorSenatorName('Cindy Hyde-Smith')
        } else if (e.target.dataset.name === "AL") {
            setUsState("Alabama")
            setSeniorSenatorCID('N00044434')
            setSeniorSenatorName('Tommy Tuberville')
            setJuniorSenatorCID('N00009920')
            setJuniorSenatorName('Richard Shelby')
        } else if (e.target.dataset.name === "GA") {
            setUsState("Georgia")
            setSeniorSenatorCID('N00040675')
            setSeniorSenatorName('John Ossoff')
            setJuniorSenatorCID('N00046489')
            setJuniorSenatorName('Raphael Warnock')
        } else if (e.target.dataset.name === "FL") {
            setUsState("Florida")
            setSeniorSenatorCID('N00030612')
            setSeniorSenatorName('Marco Rubio')
            setJuniorSenatorCID('N00043290')
            setJuniorSenatorName('Rick Scott')
        } else if (e.target.dataset.name === "SC") {
            setUsState("South Carolina")
            setSeniorSenatorCID('N00009975')
            setSeniorSenatorName('Lindsey Graham')
            setJuniorSenatorCID('N00031782')
            setJuniorSenatorName('Tim Scott')
        } else if (e.target.dataset.name === "NC") {
            setUsState("North Carolina")
            setSeniorSenatorCID('N00035492')
            setSeniorSenatorName('Thom Tillis')
            setJuniorSenatorCID('N00039551')
            setJuniorSenatorName('Ted Budd')
        } else if (e.target.dataset.name === "VA") {
            setUsState("Virginia")
            setSeniorSenatorCID('N00002097')
            setSeniorSenatorName('Mark Warner')
            setJuniorSenatorCID('N00033177')
            setJuniorSenatorName('Tim Kaine')
        } else if (e.target.dataset.name === "WV") {
            setUsState("West Virginia")
            setSeniorSenatorCID('N00032838')
            setSeniorSenatorName('Joe Manchin')
            setJuniorSenatorCID('N00009771')
            setJuniorSenatorName('Shelly Moore Capito')
        } else if (e.target.dataset.name === "MD") {
            setUsState("Maryland")
            setSeniorSenatorCID('N00001955')
            setSeniorSenatorName('Ben Cardin')
            setJuniorSenatorCID('N00013820')
            setJuniorSenatorName('Chris Van Hollen')
        } else if (e.target.dataset.name === "PA") {
            setUsState("Pennsylvania")
            setSeniorSenatorCID('N00027503')
            setSeniorSenatorName('Bob Casey')
            setJuniorSenatorCID('N00038201')
            setJuniorSenatorName('John Fetterman')
        } else if (e.target.dataset.name === "NJ") {
            setUsState("New Jersey")
            setSeniorSenatorCID('N00000699')
            setSeniorSenatorName('Bob Menendez')
            setJuniorSenatorCID('N00035267')
            setJuniorSenatorName('Cory Booker')
        } else if (e.target.dataset.name === "CT") {
            setUsState("Connecticut")
            setSeniorSenatorCID('N00031685')
            setSeniorSenatorName('Richard Blumenthal')
            setJuniorSenatorCID('N00027566')
            setJuniorSenatorName('Chris Murphy')
        } else if (e.target.dataset.name === "RI") {
            setUsState("Rhode Island")
            setSeniorSenatorCID('N00000362')
            setSeniorSenatorName('Jack Reed')
            setJuniorSenatorCID('N00027533')
            setJuniorSenatorName('Sheldon Whitehouse')
        } else if (e.target.dataset.name === "VT") {
            setUsState("Vermont")
            setSeniorSenatorCID('N00000528')
            setSeniorSenatorName('Bernie Sanders')
            setJuniorSenatorCID('N00000515')
            setJuniorSenatorName('Peter Welch')
        } else if (e.target.dataset.name === "NH") {
            setUsState("New Hampshire")
            setSeniorSenatorCID('N00024790')
            setSeniorSenatorName('Jeanne Shaheen')
            setJuniorSenatorCID('N00038397')
            setJuniorSenatorName('Maggie Hassan')
        } else if (e.target.dataset.name === "ME") {
            setUsState("Maine")
            setSeniorSenatorCID('N00000491')
            setSeniorSenatorName('Susan Collins')
            setJuniorSenatorCID('N00034580')
            setJuniorSenatorName('Angus King')
        } else if (e.target.dataset.name === "AK") {
            setUsState("Alaska")
            setSeniorSenatorCID('N00026050')
            setSeniorSenatorName('Lisa Murkowski')
            setJuniorSenatorCID('N00035774')
            setJuniorSenatorName('Dan Sullivan')
        } else if (e.target.dataset.name === "HI") {
            setUsState("Hawaii")
            setSeniorSenatorCID('N00028138')
            setSeniorSenatorName('Brian Schatz')
            setJuniorSenatorCID('N00028139')
            setJuniorSenatorName('Mazie Hirono')
        } else if (e.target.dataset.name === "WI") {
            setUsState("Wisconsin")
            setSeniorSenatorCID('N00032546')
            setSeniorSenatorName('Ron Johnson')
            setJuniorSenatorCID('N00004367')
            setJuniorSenatorName('Tammy Baldwin')
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
            {
              <StateDialog 
              setDialogState={setDialogState} 
              dialogState={dialogState} 
              handleDialogClose={handleDialogClose} 
              usState={usState} 
              seniorSenatorName={seniorSenatorName} 
              juniorSenatorName={juniorSenatorName}/> 
            }
        </>
    )
}

export default Map