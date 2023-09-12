import { createTheme } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import {cyan, grey} from "@mui/material/colors";
import {hexToRgb} from "@mui/material";
import React from "react";

/*const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );*/


export const [mode, setMode] = React.useState<'light' | 'dark'>('light');

const theme = createTheme({


        palette: {
            mode,
            /*if(mode = 'light'){

            }*/
            primary: {
                main: hexToRgb('#880ED4'),
                dark: hexToRgb('#5f0994'),
                light: hexToRgb('#9f3edc'),
                /*contrastText: hexToRgb('#51087E'),*/
            },
            secondary: {
                main: hexToRgb('#00b0ff'),
                dark: hexToRgb('#007bb2'),
                light: hexToRgb('#33bfff'),
                /*contrastText: hexToRgb('#51087E'),*/
            },
            /*text: {
                primary: hexToRgb('#000000'),
                secondary: hexToRgb('#ffffff'),
                disabled: hexToRgb('#ffffff'),
                /!*contrastText: hexToRgb('#51087E'),*!/
            },*/
            //divider: hexToRgb('#00b0ff'),
            background: {
                // default: grey[900],
                // paper: grey[900],
            },
        },

});

export default theme;