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
    Alert, CardHeader,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const SignUpStep4 = () => {
    /*const formik = useFormik({
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
    });*/


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
                                name="cellphoneNumber"
                                fullWidth
                                id="cellphone-number"
                                label="Número de Celular (Opicional)"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-bio"
                                name="bio"
                                fullWidth
                                id="bio"
                                label="Bio (Opicional)"
                                multiline
                                rows={15}
                            />
                        </Grid>
                    </Grid>

                    <div style={{ marginTop: '30px' }}></div>
                </Box>
            </Box>
        </Container>
    );

};

export default SignUpStep4;