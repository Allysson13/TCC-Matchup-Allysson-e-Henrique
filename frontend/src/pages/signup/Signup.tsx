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
                            <SignUpStep2></SignUpStep2>
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