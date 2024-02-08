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
                <DryIcon />
                <Typography>
                    Hello welcome to da club
                </Typography>
                <DryIcon />
            </IconButton> 
        </div>
    )
}

export default Home;