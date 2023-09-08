/*
import React, {useState} from 'react';
import {Stepper, Step, StepLabel, Button, Typography, Grid, CssBaseline, Box, CardHeader} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {ROUTE_SIGN_IN} from "../../App";
import SignUpStep1 from "../../containers/form/SignUpStep1";
import {Formik} from "formik";
import SignUpStep2 from "../../containers/form/SignUpStep2";
import SignUpStep4 from "../../containers/form/SignUpStep4";
import SignUpStep3 from "../../containers/form/SignUpStep3";
import {User} from "../../model/user";

var userToRegister: User;
const SignUp = () => {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha: '',
        // ...outros campos
    });



    const handleNext = () => {

        if (etapaAtual < etapas.length - 1) {
            setEtapaAtual(etapaAtual + 1);
        }
    };

    const handleBack = () => {
        if (etapaAtual > 0) {
            setEtapaAtual(etapaAtual - 1);
        }
    };

    const handleFinish= () => {
        console.log("Finished");
    };


    const handleChange = (campo: any, valor: any) => {
        setDados({...dados, [campo]: valor});
    };

    return (
        <Grid container justifyContent="center">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12}>
                    <Stepper activeStep={etapaAtual}>
                        {etapas.map((etapa, index) => (
                            <Step key={index}>
                                <StepLabel>{etapa}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>


                <Grid item xs={12}>
                    <Grid container>
                        {etapaAtual === 0 && (
                            <SignUpStep1 user={userToRegister}></SignUpStep1>
                        )}
                        {etapaAtual === 1 && (
                            <SignUpStep2 user={userToRegister}></SignUpStep2>
                        )}
                        {etapaAtual === 2 && (
                            <SignUpStep3></SignUpStep3>
                        )}
                        {etapaAtual === 3 && (
                            <SignUpStep4></SignUpStep4>
                        )}
                    </Grid>


                    {/!*<div style={{ marginTop: '30px' }}></div>*!/}
                    <CardHeader
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                </Grid>
            </Box>
        </Grid>
    )
}

{/!*
 <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Cadastrar
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href={ROUTE_SIGN_IN} variant="body2">
                                    Já tem uma conta? Faça login
                                </Link>
                            </Grid>
                        </Grid>*!/
}

export default SignUp;
*/

import React, { useState } from 'react';
import { Container, CssBaseline, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import SignUpStep1 from "../../containers/form/SignUpStep1";
import SignUpStep2 from "../../containers/form/SignUpStep2";
import SignUpStep4 from "../../containers/form/SignUpStep4";
import SignUpStep3 from "../../containers/form/SignUpStep3";

const etapas = ['Pessoais', 'Endereço', 'Interesses', 'Conclusão'];

const SignUp: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        termsAndConditions: false,
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = (values: any, actions: any) => {
        setFormValues({ ...formValues, ...values });

        if (activeStep < steps.length - 1) {
            handleNext();
        } else {
            console.log(formValues); // Dados do usuário
            actions.setSubmitting(false); // Importante para indicar que a submissão foi concluída
        }
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <SignUpStep1 />;
            case 1:
                return <SignUpStep2 />;
            case 2:
                return <SignUpStep3 />;
            default:
                return 'Erro: Etapa desconhecida';
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography component="h1" variant="h5">
                    Cadastro de Usuário
                </Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                    }}
                    /*validationSchema={Yup.object().shape({
                        firstName: Yup.string().required('Campo obrigatório'),
                        lastName: Yup.string().required('Campo obrigatório'),
                        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
                        password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Campo obrigatório'),
                    })}*/
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                >
                    <Form>
                        <div>{getStepContent(activeStep)}</div>
                        <div>
                            {activeStep !== 0 && (
                                <Button variant="contained" color="primary" onClick={handleBack}>
                                    Voltar
                                </Button>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={activeStep === steps.length - 1 ? undefined : handleNext}
                            >
                                {activeStep === steps.length - 1 ? 'Cadastrar' : 'Próximo'}
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Container>
    );
};

export default SignUp;


