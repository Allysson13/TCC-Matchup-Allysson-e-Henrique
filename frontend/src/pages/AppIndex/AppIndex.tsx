import React from 'react';
import Button from '@mui/material/Button';
import SignIn from "../signin/SignIn";
import theme from "../../theme";

const AppIndex: React.FC = () => {
    return (
        <div>
            <h1>MATCHUP</h1>
            <Button variant='contained' color="primary" onClick={theme.palette.mode = "light";}>
                Hello World!
            </Button>
            <SignIn />
        </div>

    );
}

export default AppIndex;