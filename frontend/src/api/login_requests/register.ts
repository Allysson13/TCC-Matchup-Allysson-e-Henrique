import axios, {AxiosError, AxiosResponse} from 'axios';
import {Interest} from "../../model/interest";
import {User} from "../../model/user";

const API_BASE_URL = 'http://localhost:8080/api/';

export const getAllInterests = async (): Promise<Array<Interest>> => {
    try {
        const response = await axios.get(`${API_BASE_URL}admin/get/interest/all`);
        console.log(response);
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 409) {
                console.error('Network or Server Error:', axiosError.message);
            }
            throw error;
        } else {
            console.error('Erro não relacionado ao Axios:', error);
            throw error;
        }
    }
};


export const register = async (userToRegister: User): Promise<User> => {
    try {
        let response: AxiosResponse<User, any>;
        response = await axios.post<User>(`${API_BASE_URL}register/user`, userToRegister);
        return response.data;
    } catch (error) {
        throw error;
    }

};




