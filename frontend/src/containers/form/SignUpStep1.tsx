/*
/!*
import React from "react";
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Link,
    Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {ROUTE_SIGN_IN} from "../../App";
import {DatePicker, DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {useFormik} from "formik";
import {User} from "../../model/user";var userToRegister: User;


interface SignUpProps {
    user: User;
}
const SignUpStep1: React.FC<SignUpProps> = ({user}) => {
    var userToRegister = {user}.user;
   /!* const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validateSignUpStep1, // Use o esquema Yup aqui
        onSubmit: (values) => {
            console.log(values); // Lógica de envio do formulário
        },
    });*!/

    const minDate = dayjs().subtract(120, 'year').toDate();
    const maxDate = dayjs().subtract(13, 'year').toDate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Faça Cadastro
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Nome"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-username"
                                name="username"
                                required
                                fullWidth
                                id="username"
                                label="Nome de Usuário"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Confirmar Senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>



                        <Grid item xs={12}>
                          {/!*  <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    inputFormat="MM/dd/yyyy"
                                    value={12/12/2012}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>*!/}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    /!*minDate={minDate}
                                    maxDate={maxDate}*!/
                                    sx={{ width: '100%' }}
                                ></DatePicker>
                            </LocalizationProvider>


                        </Grid>


                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>


                </Box>
            </Box>
        </Container>
    );

};

export default SignUpStep1;*!/


import React from 'react';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { User } from '../../model/user';

interface SignUpProps {
    user: User;
}

const SignUpStep1: React.FC<SignUpProps> = ({ user }) => {
    const minDate = dayjs().subtract(120, 'year').toDate();
    const maxDate = dayjs().subtract(13, 'year').toDate();

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório'),
            username: Yup.string().required('Nome de usuário é obrigatório'),
            email: Yup.string().email('Email inválido').required('Email é obrigatório'),
            password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem coincidir').required('Confirme a senha'),
        }),
        onSubmit: (values) => {
            console.log(values); // Lógica de envio do formulário
        },
    });

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
                <div style={{marginTop: '20px'}}></div>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Nome"
                                autoFocus
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-username"
                                name="username"
                                required
                                fullWidth
                                id="username"
                                label="Nome de Usuário"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirmar Senha"
                                type="password"
                                id="confirmPassword"
                                autoComplete="new-password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker sx={{ width: '100%' }} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between">
                                <Grid item>
                                    <Button onClick={handleBack} disabled={etapaAtual === 0}>Anterior</Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={etapaAtual === 3 ? handleFinish : handleNext}
                                            variant="contained">
                                        {etapaAtual === 3 ? 'Concluir' : 'Próximo'}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default SignUpStep1;
*/

import React from 'react';
import { TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpStep1: React.FC = () => {
    return (
        <div>
            <Field
                name="firstName"
                as={TextField}
                label="Nome"
                variant="outlined"
                fullWidth
            />
            <ErrorMessage name="firstName" component="div" />

            <Field
                name="lastName"
                as={TextField}
                label="Sobrenome"
                variant="outlined"
                fullWidth
            />
            <ErrorMessage name="lastName" component="div" />
        </div>
    );
};

export default SignUpStep1;

