import React from 'react';
import {DialogTitle, DialogContent, Typography, Button, Dialog, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


const StateDialog = ({dialogState, handleDialogClose, usState, setDialogState}) => {

    console.log(dialogState)

    return (
        <Dialog
            open={dialogState}
            onClose={handleDialogClose}
        >
            <IconButton onClick={handleDialogClose}>
                <ClearIcon />
            </IconButton>
            <DialogTitle>{usState}</DialogTitle>
            <DialogContent>
                <Typography>
                    {usState}'s two senators are so and so
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default StateDialog;