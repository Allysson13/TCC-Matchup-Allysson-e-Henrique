import React from 'react';
import Button from '@mui/material/Button';
import SignIn from "../signin/SignIn";

const AppIndex: React.FC = () => {
    return (
        <div>
            <h1>MATCHUP</h1>
            <Button variant='contained' color="primary">
                Hello World!
            </Button>
            <SignIn></SignIn>
        </div>

    );
}

export default AppIndex;