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
import {ROUTE_SIGN_IN} from "../../App";
import {DatePicker, DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {useFormik} from "formik";
import {validateSignUpStep1} from "../../utils/validation/UserValidation";

const SignUpStep2 = () => {
    /*const formik = useFormik({
        initialValues: {
            zipcode: '',
            state: '',
            city: '',
            neighborhood: '',
            street: '',
            number: '',
        },

    };*/



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
                            autoComplete="given-zipcode"
                            name="zipcode"
                            required
                            fullWidth
                            id="zipcode"
                            label="CEP"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-state"
                            name="state"
                            required
                            fullWidth
                            id="state"
                            label="Estado"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="city"
                            label="Cidade"
                            name="city"
                            autoComplete="city"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="neighborhood"
                            label="Bairro"
                            type="neighborhood"
                            id="neighborhood"
                            autoComplete="neighborhood"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="street"
                            label="Rua/Avenida"
                            type="street"
                            id="street"
                            autoComplete="street"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="number"
                            label="Número"
                            type="text"
                            id="number"
                            autoComplete="number"
                        />
                    </Grid>

                </Grid>
                <CardHeader
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardHeader
                    actAsExpander={true}
                    showExpandableButton={true}
                />
            </Box>
        </Box>
    </Container>
);

};

export default SignUpStep2;