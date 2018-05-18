import React from 'react';
import {AppBar, Typography, IconButton, Toolbar} from "@material-ui/core";import {AccountCircle, ExitToApp} from "@material-ui/icons";

export const Header = (props) =>
    <AppBar position='static'>
        <Toolbar>
            <Typography variant='title' color='inherit' style={{ flex: 1}}>
                Developer Admin
            </Typography>
                <IconButton color='inherit'>
                    <AccountCircle/>
                </IconButton>
                <IconButton color='inherit'>
                    <ExitToApp/>
                </IconButton>
        </Toolbar>
    </AppBar>;