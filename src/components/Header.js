import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import{PermContactCalendar} from '@mui/icons-material'
const Header= () => {
    return(
        <div>
            <AppBar>
            <Toolbar>
                <PermContactCalendar fontSize='large'/>
                <Typography variant='h4'> My Contact</Typography>
            </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;
