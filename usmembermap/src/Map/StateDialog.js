import React from 'react';
import {DialogTitle, DialogContent, Typography, Button, Dialog, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


const StateDialog = ({loading, juniorSenatorIndustryAmount, seniorSenatorIndustryAmount, dialogState, handleDialogClose, usState, setDialogState, seniorSenatorName, juniorSenatorName}) => {

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
                    {loading ? `Getting ${seniorSenatorName}'s financial information...` : `${seniorSenatorName} took ${seniorSenatorIndustryAmount.join(', ')}`}
                </Typography>
                <br></br>
                <Typography>
                    {loading ? `Getting ${juniorSenatorName}'s financial information...` : `${juniorSenatorName} took ${juniorSenatorIndustryAmount.join(', ')}`}
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default StateDialog;