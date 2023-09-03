import * as Yup from "yup";
import {emailExists} from "../../api/login_requests/login";

export var isEmail: boolean;
export const validationLogin = Yup.object().shape({
    emailOrUsername: Yup.string()
        .required('O campo de email ou nome de usuário deve ser preenchido!')
        .test('emailOrUsername', 'Email ou nome de usuário está inválido!', (value) => {
            return validateEmail(value) || validateUsername(value);
        }),
    password: Yup.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres!')
        //.matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*_])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_\d]{8,255}$/, 'A senha deve conter letras maiúsculas, minúsculas e símbolos!')
        .required('É necessário preencher o campo de senha!'),
});


const validateEmail = (email: string | undefined) => {
    isEmail = Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        /*.test('emailOrUsername', 'Email ou nome de usuário está inválido!', (value) => {
            return validateEmail(value) || validateUsername(value);
        })*/
        .isValidSync(email);
    //isEmail = Yup.string().email().isValidSync(email)

    return isEmail;
};

const validateUsername = (username: string | undefined) => {
    isEmail = !Yup.string()
        .matches(/^(?!.*[-_.]{2})[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]$/, 'Nome de usuário inválido!')
        .isValidSync(username);
    return !isEmail;
}
