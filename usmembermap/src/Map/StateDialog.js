import React from 'react';
import {DialogTitle, DialogContent, Typography, Button, Dialog, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


const StateDialog = ({juniorSenatorIndustryAmount, seniorSenatorIndustryAmount, dialogState, handleDialogClose, usState, setDialogState, seniorSenatorName, juniorSenatorName}) => {

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
                <br></br>
                <Typography>
                    {seniorSenatorName} took {seniorSenatorIndustryAmount.join(', ')}
                </Typography>
                <br></br>
                <Typography>
                    {juniorSenatorName} took {juniorSenatorIndustryAmount.join(', ')}
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default StateDialog;