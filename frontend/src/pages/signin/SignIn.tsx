import React, { useState } from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
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
import { emailExists, login, usernameExists, ValidationResponse } from '../../api/login_requests/login';
import { SignInPayload } from '../../model/user';
import { isEmail, validationLogin } from '../../utils/validation/UserValidation';

const SignIn = () => {
    const [valid, setValid] = useState(true);

    const initialValues = {
        emailOrUsername: '',
        password: '',
        remember: false,
    };

    const handleSubmit = async (values: SignInPayload, { setSubmitting }) => {
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
            } else {
                const userData = await login(isEmail, values.emailOrUsername, values.password, values.remember);
                // Handle the logged-in user here, e.g., update authentication state.
            }
        } catch (error) {
            setValid(false);
            // Handle login errors here, e.g., set error messages.
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                    style={{ display: valid ? 'none' : 'flex' }}
                >
                    Credenciais inválidas!
                </Alert>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationLogin}
                    onSubmit={handleSubmit}
                >
                    {({ isValid, isSubmitting }) => (
                        <Form noValidate>
                            <Field name="emailOrUsername">
                                {({ field, meta }: FieldProps) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="emailOrUsername"
                                        label="Email Address or Username"
                                        variant="outlined"
                                        error={!valid || (meta.touched && !!meta.error)}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="password">
                                {({ field, meta }: FieldProps) => (
                                    <TextField
                                        {...field}
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        error={!valid || (meta.touched && !!meta.error)}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <FormControlLabel
                                control={<Checkbox name="remember" color="primary" />}
                                label="Manter conectado"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={!isValid || isSubmitting}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Don't have an account? Sign Up
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
