import type { NextPage } from 'next'
import { prisma, gebruikers } from '@prisma/client'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Head from 'next/head'

import { Header, Footer } from '@Components/basic'

const Login: NextPage = ({ }) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const checkGebruikers = async (data) => {
        const res = fetch("http://localhost:3000/api/users/checkUsers", {
            method: 'POST',
            body: JSON.stringify({data})
        })
        const user = await (await res).json();

        sessionStorage.setItem('userId', user.id);
        sessionStorage.setItem('userName', `${user.naam}`);
        sessionStorage.setItem('userRole', `${user.role}`);

        const userId = sessionStorage.getItem('userId');
        const userName = sessionStorage.getItem('userName');
        const userRole = sessionStorage.getItem('userRole');
    }
    
    return(
        <>
        <Header />
        <div className='login'>
            <form onSubmit={handleSubmit(checkGebruikers)}>
                <label htmlFor="nameInlog">Name:</label>
                <input defaultValue="Admin" type="text" id="nameInlog" {...register('naam', {required: true})}/>
                <label htmlFor="passwordInlog">Password:</label>
                <input defaultValue="admin" type="password" id="passwordInlog" {...register('password', {required: true})}/>

                <input type="submit" value="Login" />
            </form>
            <p>Nog geen account?</p><a href="login">Register</a>
        </div>
        {/* button to link to login */}
        <Footer />
        </>
    )
}

export default Login