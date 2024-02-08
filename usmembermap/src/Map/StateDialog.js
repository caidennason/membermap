import React from 'react';
import { Dialog } from '@mui/material';
import {DialogTitle} from '@mui/material';

const StateDialog = ({dialogState, handleDialogClose, usState}) => {

    return (
        <Dialog
            open={dialogState}
            onClose={handleDialogClose}
        >
            <DialogTitle>{usState}</DialogTitle>
        </Dialog>
    )
}

export default StateDialog;