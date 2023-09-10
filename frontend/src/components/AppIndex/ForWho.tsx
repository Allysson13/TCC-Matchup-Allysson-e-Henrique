import * as React from 'react';
import {Theme} from '@mui/material/styles';
import {SxProps} from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Grow, Typography} from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const ForWho = () => {
    function isScrolled() {
        return window.scrollY > 100; // Defina o limite desejado
    }

    return (
        <Box
            component="section"
            sx={{display: 'flex', overflow: 'hidden', bgcolor: 'secondary.dark'}}
        >
            <Container sx={{mt: 20, mb: 25, display: 'flex', position: 'relative'}}>
                {/*<Box
                    component="img"
                    src="/static/themes/onepirate/productCurvyLines.png"
                    alt="curvy lines"
                    sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
                />*/}

                <Grid container spacing={5}>
                    <Grow in={isScrolled()}
                          style={{transformOrigin: '0 0 0'}}
                          {...(isScrolled() ? {timeout: 2000} : {})}
                    >
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <QuestionAnswerIcon
                                    sx={{width: '80px', height: '80px', marginTop: '15px', marginBottom: '15px'}}/>
                                <Typography variant="h5" align="center">
                                    Para pessoas que adoram conversar sobre jogos
                                </Typography>
                            </Box>
                        </Grid>
                    </Grow>
                    <Grow in={isScrolled()}
                          style={{transformOrigin: '0 0 0'}}
                          {...(isScrolled() ? {timeout: 1000} : {})}
                    >
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <GroupsIcon
                                    sx={{width: '80px', height: '80px', marginTop: '15px', marginBottom: '15px'}}/>
                                <Typography variant="h5" align="center">
                                    Para gamers solitários em busca de mais companheiros de jogatina
                                </Typography>
                            </Box>
                        </Grid>
                    </Grow>
                    <Grow in={isScrolled()}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <SchoolIcon
                                    sx={{width: '80px', height: '80px', marginTop: '15px', marginBottom: '15px'}}/>
                                <Typography variant="h5" align="center">
                                    Para aqueles que desejam expandir o seu repertório gamer
                                </Typography>
                            </Box>
                        </Grid>
                    </Grow>
                </Grid>
            </Container>
        </Box>
);
}

export default ForWho;
