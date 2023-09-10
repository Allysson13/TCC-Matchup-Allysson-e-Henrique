import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface ToggleColorModeButtonProps {
    darkMode: boolean;
    onClick: () => void;
}

const ToggleColorModeButton: React.FC<ToggleColorModeButtonProps> = ({ darkMode, onClick }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderColor: 'text.primary',
                border: '1px solid',
                borderRadius: 25,
            }}
        >
            <IconButton sx={{ ml: 1 }} onClick={onClick} color="inherit">
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
};

export default ToggleColorModeButton;
