import { createTheme } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import {grey} from "@mui/material/colors";

const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: purple[700],
            },
            background: {
                // default: grey[900],
                // paper: grey[900],
            },
        },

});

export default theme;