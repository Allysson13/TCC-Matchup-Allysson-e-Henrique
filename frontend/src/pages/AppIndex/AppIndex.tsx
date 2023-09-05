import React from 'react';
import Button from '@mui/material/Button';
import theme from "../../theme";
import {useNavigate} from "react-router-dom";

const AppIndex: React.FC = () => {
    const history = useNavigate();
    return (
        <div>
            <h1>BEM-VINDO(A) AO MATCHUP!</h1>
            <Button
                variant="contained"
                onClick={() => history("/login")}
            >
                LOGIN
            </Button>
        </div>
    );
}

export default AppIndex;