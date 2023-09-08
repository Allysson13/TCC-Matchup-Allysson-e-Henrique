/*
import React, { useEffect, useState } from 'react';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Grid,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {getAllInterests} from "../../api/login_requests/register";
import {Interest} from "../../model/interest";

const SignUpStep3 = () => {
    const [interests, setInterests] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simule uma função de busca assíncrona (substitua por sua própria lógica)
                const response: Interest[] = await getAllInterests();
                setInterests(response); // Define os interesses quando a busca estiver completa
            } catch (error) {
                console.error('Erro ao buscar interesses', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // Lógica para manipular os dados do formulário aqui
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Faça Cadastro
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container height={496} spacing={2}>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                fullWidth
                                id="tags-outlined"
                                options={interests}
                                getOptionLabel={(interest: Interest) => interest.name}
                                value={selectedInterests}
                                onChange={(_, newValue) => setSelectedInterests(newValue)}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField

                                        {...params}
                                        label="Interesses"
                                        placeholder="Selecione seus interesses"
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    {/* Outros campos do formulário */}
                </Box>
            </Box>
        </Container>
    );
};

export default SignUpStep3;
*/

import React from 'react';
import { FormControlLabel, Checkbox, Button } from '@mui/material';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpStep3: React.FC = () => {
    return (
        <div>
            {/*<Field
                name="termsAndConditions"
                type="checkbox"
                as={FormControlLabel}
                label="Aceito os termos e condições"
            />
            <ErrorMessage name="termsAndConditions" component="div" />*/}

            <Button variant="contained" color="primary" type="submit">
                Cadastrar
            </Button>
        </div>
    );
};

export default SignUpStep3;

