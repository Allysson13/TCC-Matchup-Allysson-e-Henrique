import React from 'react';
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
    Link
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Field, FieldProps} from 'formik';
import DatePickerField from "../../components/form/DatePickerField";


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

