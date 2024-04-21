import React from 'react';
import Home from '../Home/Home';
import Map from '../Map/Map';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, AppBar, Toolbar, Stack, Avatar } from '@mui/material';


const Navbar = () => {

    return(
        <div>
            <AppBar>
                <Typography></Typography>
                <Toolbar>
                    <Stack direction="row" spacing={20}>
                        <Button color="inherit" component={Link} to='/'>About</Button>
                        <Button color="inherit" component={Link} to='/map'>Map</Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/map" element={<Map/>}/>
            </Routes>
        </div>
    )
}

export default Navbar