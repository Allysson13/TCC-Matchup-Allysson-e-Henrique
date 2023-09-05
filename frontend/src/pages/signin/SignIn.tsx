import React, {useState} from 'react';
import {Formik, Form, Field, FieldProps} from 'formik';
import * as Yup from 'yup';
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
import {emailExists, login, usernameExists, ValidationResponse} from '../../api/login_requests/login';
import {SignInPayload, User} from '../../model/user';
import {isEmail, validateEmail, validationLogin} from '../../utils/validation/UserValidation';
import {useNavigate} from "react-router-dom";
import theme from "../../theme";

const SignIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useNavigate();
    const [valid, setValid] = useState(true);

    const initialValues = {
        emailOrUsername: '',
        password: '',
        remember: false,
    };

    let userData: User;
    const handleSubmit = async (values: SignInPayload, {setSubmitting}) => {
        try {
            let validationResponse: ValidationResponse;

            if (isEmail) {
                validationResponse = await emailExists(values.emailOrUsername);
            } else {
                validationResponse = await usernameExists(values.emailOrUsername);
            }

            console.log(validationResponse);

            if (validationResponse.status === 409) {
                setValid(false);
                return;
            } else {
                userData = await login(isEmail, values.emailOrUsername, values.password, values.remember);
                // Handle the logged-in user here, e.g., update authentication state.
                console.log(userData);
            }
        } catch (error) {
            setValid(false);
            return;
            // Handle login errors here, e.g., set error messages.
        }

        setSubmitting(false);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
        history('/home');

    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: 550,
                    minWidth: 450,
                    width: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: `1px solid${theme.palette.primary.main}`,
                    padding: '40px',
                    borderRadius: '16px',
                    backgroundColor: '9c27b0',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    {/* Your avatar/icon */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Alert
                    id="alert-invalid-credentials"
                    severity="error"
                    onClose={() => {
                        setValid(true);
                    }}
                    style={{display: valid ? 'none' : 'flex'}}
                >
                    Credenciais inválidas!
                </Alert>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationLogin}
                    onSubmit={handleSubmit}
                >
                    {({isValid, isSubmitting}) => (
                        <Form noValidate>
                            <Field name="emailOrUsername">
                                {({field, meta}: FieldProps) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="emailOrUsername"
                                        label="Email ou Nome de Usuário"
                                        variant="outlined"
                                        error={!valid || (meta.touched && !!meta.error)}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="password">
                                {({field, meta}: FieldProps) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Senha"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        error={!valid || (meta.touched && !!meta.error)}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <FormControlLabel
                                control={<Checkbox name="remember" color="primary"/>}
                                label="Manter conectado"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{mt: 3, mb: 2}}
                                disabled={!isValid || isSubmitting}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Não tem uma conta? Cadastre-se
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};


export default SignIn;