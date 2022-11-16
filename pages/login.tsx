import type { NextPage } from 'next'
import { prisma, gebruikers } from '@prisma/client'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Head from 'next/head'

import { Header, Footer } from '@Components/basic'

// gets all the users
export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/users/getUsers")
    const data:gebruikers[] = await res.json()
    return {
        props: {
            gebruikersData: data
        }
    }
}

const Login: NextPage = ({ }) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const addGebruiker = async (data) => {
        const res = fetch("http://localhost:3000/api/users/addUser", {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
    
    return(
        <>
        <Header />
        <div className='register'>
            <form onSubmit={handleSubmit(addGebruiker)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" {...register('naam', {required: true})}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" {...register('password', {required: true})}/>

                <input type="submit" value="Account aanmaken" />
            </form>
            <p>Heeft u al een account? </p><a href="loginUser">Login!</a>
        </div>
        {/* button to link to loginUser */}

        <Footer />
        </>

        
    )
}

export default Login