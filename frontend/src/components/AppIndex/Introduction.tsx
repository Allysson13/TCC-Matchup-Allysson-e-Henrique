import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';
import {Button, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Introduction = () => {
    const [backgroundImages, setBackgroundImages] = useState([
        'https://img.freepik.com/fotos-premium/menino-de-oculos-vr-jogar-com-um-videogame-virtual_207634-10041.jpg?size=626&ext=jpg',
        /*'/home/liceki/Documents/TCC-Matchup-All
  ysson-e-Henrique/frontend/src/img/img1.jpg',
        './img1.jpg',
        '/frontend/src/img/img2.jpg',
        'frontend/src/img/img3.jpg',
        'frontend/src/img/img4.jpg',
        'frontend/src/img/img5.jpg',
        'frontend/src/img/img6.jpg',
        'frontend/src/img/img7.jpg',
        'frontend/src/img/img8.jpg',
        'frontend/src/img/img9.jpg',
        'frontend/src/img/img10.jpg',
        'frontend/src/img/img11.jpg',
        'frontend/src/img/img12.jpg',
        'frontend/src/img/img13.jpg',
        'frontend/src/img/img14.jpg',
        'frontend/src/img/img15.jpg',
        'frontend/src/img/img16.jpg',
        'frontend/src/img/img17.jpg',*/
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Troque para a próxima imagem
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Altere a cada 5 segundos (5000ms)

        return () => {
            clearInterval(interval); // Limpe o intervalo ao desmontar o componente
        };
    }, [backgroundImages]);


    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                backgroundColor: '#0000', // Average color of the background image.
                backgroundPosition: 'center',
                filter: 'blur(4px)',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{display: 'none'}}
                src={backgroundImages[currentImageIndex]}
                alt="increase priority"
            />
            <Typography align="center" variant={"h2"}> {/*color="inherit" align="center" variant="h2" marked="center"*/}

            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{mb: 4, mt: {xs: 4, sm: 10}}}
            >
                Ambiente que une os apaixonados por jogos
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h6"
                sx={{maxWidth: '650px'}}
            >
                Uma plataforma na qual você pode conhecer pessoas com interesses em comum sobre jogos na região, descobrir novos jogos perfeitos para você e passar horas interagindo nos chats e comunidades sobre o mundo gamer.
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/premium-themes/onepirate/sign-up/"
                sx={{minWidth: 200, marginTop: '70px'}}
            >
                DOWNLOAD
            </Button>
            <Typography variant="body2" color="inherit" sx={{mt: 2}}>
            </Typography>
        </ProductHeroLayout>
    );
}

export default Introduction;
