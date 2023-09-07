import React, {useState} from 'react';
import {Stepper, Step, StepLabel, Button, Typography, Grid, CssBaseline, Box, CardHeader} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {ROUTE_SIGN_IN} from "../../App";
import SignUpStep1 from "../../components/form/SignUpStep1";
import {Form, Formik} from "formik";

const SignUp = () => {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha: '',
        // ...outros campos
    });

    const etapas = ['Pessoais', 'Endereço', 'Interesses', 'Conclusão'];

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

                <Formik
                    initialValues={{
                        nome: '',
                        email: '',
                        senha: '',
                        // ...outros campos
                    }}
                    validationSchema={schemaEtapa1}
                    onSubmit={(values, { setSubmitting }) => {
                        // Lógica de envio para a primeira etapa
                        // Chame handleNext() para avançar para a próxima etapa
                    }}
                >
                    {(formikProps) => (
                        <Form onSubmit={formikProps.handleSubmit}>
                            {/* Campos de entrada e feedback de erro */}
                            {/* Exemplo: */}
                            <input
                                type="text"
                                name="nome"
                                onChange={formikProps.handleChange}
                                onBlur={formikProps.handleBlur}
                                value={formikProps.values.nome}
                            />
                            {formikProps.touched.nome && formikProps.errors.nome && (
                                <div>{formikProps.errors.nome}</div>
                            )}
                            {/* ...outros campos */}
                            <button type="submit">Próximo</button>
                        </Form>
                    )}
                </Formik>
                <Grid item xs={12}>
                    <Grid container>
                        {etapaAtual === 0 && (
                            <SignUpStep1></SignUpStep1>
                        )}
                        {etapaAtual === 1 && (
                            <Typography>Componente de Informações de Contato</Typography>
                        )}
                        {etapaAtual === 2 && (
                            <Typography>Componente de Conclusão</Typography>
                        )}
                    </Grid>


                    {/*<div style={{ marginTop: '30px' }}></div>*/}
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
                                <Button onClick={handleNext} disabled={etapaAtual === etapas.length - 1}
                                        variant="contained">Próximo</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

{/*
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
                        </Grid>*/
}

export default SignUp;