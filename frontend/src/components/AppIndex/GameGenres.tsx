import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";

const ImageBackdrop = styled('div')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({theme}) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

/*RPG
Mundo aberto
Luta
FPS
Souls Like
Puzzle
Plataforma
COOP
Tabuleiro / Cartas*/

const images = [
    {
        url: 'https://www.pockettactics.com/wp-content/sites/pockettactics/2022/10/skyrim-wallpaper.jpg',
        title: 'RPG',
        width: '40%',
    },
    {
        url: 'https://w0.peakpx.com/wallpaper/992/391/HD-wallpaper-elden-ring-miyazaki-bloodborne-sekiro-dark-souls-demons-souls-from-software.jpg',
        title: 'Souls Like',
        width: '20%',
    },
    {
        url: 'https://cienciahoje.org.br/wp-content/uploads/2020/11/C_C-POP_0fe20042_0bb8_4781_82f4_7130f928b021.jpg',
        title: 'Mundo aberto',
        width: '40%',
    },
    {
        url: 'https://e0.pxfuel.com/wallpapers/680/924/desktop-wallpaper-call-of-duty-call-of-duty-background-on-bat-cod.jpg',
        title: 'FPS',
        width: '38%',
    },
    {
        url: 'https://i.pinimg.com/originals/23/2e/1d/232e1d741664caf6068d793f4424f4e8.jpg',
        title: 'Plataforma',
        width: '38%',
    },
    {
        url: 'https://i.pinimg.com/originals/0b/56/87/0b5687bd990db2eaf4424f9ac449e802.jpg',
        title: 'Puzzle',
        width: '24%',
    },
    {
        url: 'https://files.meiobit.com/wp-content/uploads/2021/04/it-takes-two-001.jpg',
        title: 'COOP',
        width: '40%',
    },
    {
        url: 'https://i.pinimg.com/736x/4e/d7/c5/4ed7c598bb1a943ba80b1dfc08b450ff.jpg',
        title: 'Tabuleiro / Cartas',
        width: '20%',
    },
    {
        url: 'https://images.hdqwalls.com/wallpapers/2020-mortal-kombat-11-4k-ag.jpg',
        title: 'Luta',
        width: '40%',
    },
];

const GameGenres= () => {
    return (
        <Container component="section" sx={{mt: 8, mb: 4}}>
            <Typography> {/*variant="h6" marked="left" gutterBottom*/}
                For all tastes and all desires
            </Typography>
            <Box sx={{mt: 8, display: 'flex', flexWrap: 'wrap'}}>
                {images.map((image) => (
                    <ImageIconButton
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 40%',
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <ImageBackdrop className="imageBackdrop"/>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                        >
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageTitle"
                            >
                                {image.title}
                                <div className="imageMarked"/>
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>
        </Container>
    );
}

export default GameGenres;
