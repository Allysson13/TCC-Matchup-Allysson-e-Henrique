import { createTheme } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import {cyan, grey} from "@mui/material/colors";
import {hexToRgb} from "@mui/material";

const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: purple[700],
            },
            secondary: {
                main: hexToRgb('#6D8C97'),
            },
            background: {
                // default: grey[900],
                // paper: grey[900],
            },
        },

});

export default theme;