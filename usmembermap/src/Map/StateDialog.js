import React from 'react';
import {DialogTitle, DialogContent, Typography, Button, Dialog, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


const StateDialog = ({dialogState, handleDialogClose, usState, setDialogState, seniorSenatorName, juniorSenatorName}) => {

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
                    {usState}'s senators are {seniorSenatorName} and {juniorSenatorName}.
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default StateDialog;