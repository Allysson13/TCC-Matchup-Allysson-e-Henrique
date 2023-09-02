import {
    Alert,
    Avatar,
    Button,
    Link,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
    Typography,
    makeStyles,
    Container,
} from "@mui/material/";
import LockOutlinedIcon from '@mui/icons-material/';

import {Formik, Form, Field, FieldProps} from "formik";
import {string, object} from "yup";

import {SignInPayload, User} from "../../model/user";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

/*const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        color: theme.palette.primary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    alertMessage: {
        marginBottom: theme.spacing(2),
    },
}));*/

export default function SignIn() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const validationSchema = object({
        username: string().required("É necessário preencher o nome de usuário!"),
        hashedPassword: string()
            .min(4, "A senha deve conter no mínimo 8 caracteres!")
            .required("Informe a senha: "),
    });

    const initialValues: SignInPayload = {
        username: "",
        hashedPassword: "",
        remember: undefined,
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    {/* <LockOutlinedIcon />*/}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}

                   >
                    <Field name="username">
                        {({field, meta: {error, value, initialValue, touched}}: FieldProps) => (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                variant="standard"
                                autoFocus
                            />
                        )}
                    </Field>
                        <Field name="password">
                            {({ field, meta: { error, value, initialValue, touched } }: FieldProps) => (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            )}
                        </Field>
                                <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                               label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
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
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Formik>
                </Box>
            </Box>
            <Copyright sx={{mt: 8, mb: 4}}/>
        </Container>

    );
}
