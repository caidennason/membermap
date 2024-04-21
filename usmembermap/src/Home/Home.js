import React from 'react';
import { IconButton, Typography } from '@mui/material';
import DryIcon from '@mui/icons-material/Dry';

const Home = () => {

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <IconButton color="inherit">
                <Typography>
                    Welcome to membermap! Membermap uses the OpenSecrets API to easily find where your senators get their campaign money from. Click on a state to see who is funding your senators.
                </Typography>
            </IconButton> 
        </div>
    )
}

export default Home;