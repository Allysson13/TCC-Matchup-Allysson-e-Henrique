/*

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

import React, {useState} from 'react';
import {Container, CssBaseline, Typography, Stepper, Step, StepLabel, Button, Grid, Box} from '@mui/material';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import SignUpStep1 from "../../containers/form/SignUpStep1";
import SignUpStep2 from "../../containers/form/SignUpStep2";
import SignUpStep4 from "../../containers/form/SignUpStep4";
import SignUpStep3 from "../../containers/form/SignUpStep3";
import {Interest} from "../../model/interest";
import {register} from "../../api/login_requests/register";
import {useNavigate} from "react-router-dom";
import {ROUTE_HOME} from "../../App";
import {User} from "../../model/user";

const steps = ['Pessoais', 'Endereço', 'Interesses', 'Conclusão'];

const SignUp: React.FC = () => {
    const history = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState({
        name: String,
        username: String,
        email: String,
        rawPassword: String,
        //birthDate: String,
        addressZipcode: 0,
        addressState: String,
        addressCity: String,
        addressNeighborhood: String,
        addressStreet: String,
        addressNumber: 0,
        interests: Array<Interest>,
        cellphoneNumber: String,
        bio: String,

    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = (values: any, actions: any) => {
        setFormValues({...formValues, ...values});

        if (activeStep < steps.length - 1) {
            handleNext();
        } else {
            console.log(formValues); // Dados do usuário
            let user = register({user: formValues});
            actions.setSubmitting(false);
            localStorage.setItem('user', JSON.stringify(user));
            history(ROUTE_HOME);
        }
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <SignUpStep1/>;
            case 1:
                return <SignUpStep2/>;
            case 2:
                return <SignUpStep3/>;
            case 3:
                return <SignUpStep4/>;
            default:
                return 'Erro: Etapa desconhecida';
        }
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
                <Grid>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Formik
                        initialValues={{
                            name: 'Jorge',
                            username: 'Jorge1959',
                            email: 'jorge59@gmail.com',
                            rawPassword: 'jorge123',
                            confirmPassword: 'jorge123',
                            //birthDate: '',
                            addressZipcode: 36444555,
                            addressState: 'qweqweweq',
                            addressCity: 'qweqweqwe',
                            addressNeighborhood: 'qweeqwqwe',
                            addressStreet: 'weqweqwe',
                            addressNumber: 50,
                            //interests: Array<Interest>,
                            cellphoneNumber: '',
                            bio: '',
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('Campo obrigatório'),
                            addressZipcode: Yup.string().required('Campo obrigatório'),
                            /*email: Yup.string().email('Email inválido').required('Campo obrigatório'),
                            password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Campo obrigatório'),*/
                        })}
                        onSubmit={(values, actions) => handleSubmit(values, actions)}
                    >
                        <Form>
                            <Grid>{getStepContent(activeStep)}</Grid>
                            <Grid justifyContent="space-between">
                                {activeStep !== 0 && (
                                    <Button variant="text" color="primary" onClick={handleBack}>
                                        Voltar
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    //onClick={activeStep === steps.length - 1 ? undefined : handleNext}
                                >
                                    {activeStep === steps.length - 1 ? 'Cadastrar' : 'Próximo'}
                                </Button>
                            </Grid>
                        </Form>
                    </Formik>
                </Grid>
            </Box>
        </Grid>
    );
};

export default SignUp;


