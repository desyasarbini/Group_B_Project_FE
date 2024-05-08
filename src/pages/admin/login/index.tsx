import * as yup from 'yup'; 
import * as React from 'react';
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import SubmitButton from '../../../components/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface LoginData {
    username: string
    password: string
}

interface Response {
    dataLogin: LoginData[]
}

const loginAdminPage = () => {

    const formMik = useFormik ({
        initialValues: {
            username: '',
            password: ''
        },
        // nilai yg ada dalam form terhapus ketika telah disubmit
        onSubmit: (values, {resetForm}) => {
            submitLogin(values)
            console.log(values)
            resetForm()
            alert("login berhasil!")
        },
        // validasi data
        validationSchema: yup.object({
            username: yup.string().min(5,'Username must be at least 5 characters').required(),
            password: yup.string().matches(/.{5,}/,
            'Password must be at least 5 characters')
            .required('Please enter the password'),
        })
    })

    const token = localStorage.getItem("token")

    const submitLogin = async (form: {
        username: string
        password: string
    }) => {
        try {
            const response = await fetch ('https://groupbprojectbe-production.up.railway.app/admin/login', 
            {
                headers: {
                    'Content-Type': "application/json"
                },
                method: 'POST',
                body: JSON.stringify({
                    username: form.username,
                    password: form.password
                })
            })

            const data = await response.json();
            console.log(data)
            if (data?.data.token) 
            {
                localStorage.setItem("token", data.data.token);
            }
        } 
        catch (err) {
            alert("please check again!");
        }
    }

    const { values, handleChange, handleSubmit } = formMik
    const { username, password } = values
    
    if (!token) {
        return(
            <Box component="form" sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <form onSubmit={formMik.handleSubmit}>
                    <h2>Admin Login</h2>
                    <div>
                        <TextField
                            id="outlined-required"
                            label="Required"
                            placeholder="username"
                            defaultValue={formMik.values.username}
                            onChange={formMik.handleChange('username')}
                        />
                        {
                            formMik.errors.username && (
                                <p>{formMik.errors.username}</p>
                            )
                        }
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            placeholder="password"
                            autoComplete="current-password"
                        />
                        {
                            formMik.errors.password && (
                                <p>{formMik.errors.password}</p>
                            )
                        }
                    </div>
                    <SubmitButton label={'Submit'} type={'submit'} disabled={!formMik.isValid}/>
                </form>
            </Box>
        )
    }  return <Navigate to={'/'}/>
}
export default loginAdminPage