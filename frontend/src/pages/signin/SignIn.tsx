import React from 'react';
import { Formik, Form, Field, FieldProp, FormikHelperss } from 'formik';
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
} from '@mui/material';
import {login} from "../../api/login_requests/login";

const SignIn = () => {


    const validationSchema = Yup.object().shape({
        emailOrUsername: Yup.string()
            .required('Email or username is required').min(5, "somth").max(20, "aaaaa")
            .test('is-username', 'Invalid username format', function (value) {
                if (!value || !value.includes('@')) {
                    // Check if it's a valid username using the regex and length constraint
                    return /^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]$/.test(value);
                }
                return true;
            })
            .email('Invalid email address'), // Additional email validation if needed
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });



    const initialValues = {
        emailOrUsername: '',
        password: '',
        remember: false,
    };

    const handleSubmit = (values, { setSubmitting }) => {
        values: SignInFormValues,
            { setSubmitting, setFieldError }: FormikHelperss<SignInFormValues>
    ) => {
            try {
                const userData = await login(values.emailOrUsername, values.password);
                // Lida com o usuário logado, por exemplo, atualizando o estado da máquina de autenticação
                authService.send({ type: 'LOGIN_SUCCESS', user: userData });
            } catch (error) {
                // Lida com erros de login, por exemplo, definindo mensagens de erro
                setFieldError('emailOrUsername', 'Invalid email or password');
            } finally {
                setSubmitting(false);
            }
        };
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
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
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
                                        error={meta.touched && !!meta.error}
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
                                        error={meta.touched && !!meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <FormControlLabel
                                control={<Checkbox name="remember" color="primary" />}
                                label="Remember me"
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
