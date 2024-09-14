import Input from '@/components/Input'
import axios from 'axios'
import { NextPageContext } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

export async function getServerSideProps(context:NextPageContext){
    const session=await getSession(context)

    if (session) {
        return {
            redirect:{
                destination: '/',
                permanent: false,
            }
        }
    }

    return{
        props: {},
    }
}
 

const Auth = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const router = useRouter()

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? 'register' : "login")
    }, [])

    const login = useCallback(async () => {
        try {
           await signIn('credentials',{
             email,
             password,
             redirect:false,
             callbackUrl:'/'
           })

           router.push('/profiles')
        } catch (error) {
           console.log(error)
        }
    }, [email,password,router])

    const register = useCallback(async () => {
        try {
           
            await axios.post('/api/register', {
                email,
                name,
                password
            })
            login()
        } catch (error) {
            console.log(error)
        }
    }, [email,password,name,login])
    return (
        <div className="relative bg-no-repeat bg-center bg-cover h-full w-full bg-[url('/images/hero.jpg')]">
            <div className='bg-black h-full w-full bg-opacity-45'>
                <nav className='px-12 py-6'>
                    <img src='/images/logo.png' className='h-12' />
                </nav>

                <div className='flex justify-center'>
                    <div className='bg-black w-full bg-opacity-85 px-20 py-20 lg:w-2/5 self-center mt-2 rounded-xl'>
                        <h2 className='text-white text-5xl font-semibold mb-8'>{variant == "login" ? "Sign in" : "Register"}</h2>
                        {
                            variant == "login" ?
                                <div className='flex flex-col gap-4'>
                                    <Input type='email' id='mail' onChange={(e: any) => setEmail(e.target.value)} value={email} label='Mail' />
                                    <Input type='password' id='password' onChange={(e: any) => setPassword(e.target.value)} value={password} label='Password' />
                                </div>
                                :
                                <div className='flex flex-col gap-4'>
                                    <Input type='text' id='name' onChange={(e: any) => setName(e.target.value)} value={name} label='Fullname' />
                                    <Input type='email' id='mail' onChange={(e: any) => setEmail(e.target.value)} value={email} label='Mail' />
                                    <Input type='password' id='password' onChange={(e: any) => setPassword(e.target.value)} value={password} label='Password' />
                                </div>
                        }
                        <button onClick={variant==="login" ? login : register} className='bg-red-700 py-3 hover:bg-red-800 transition rounded-md w-full mt-10 text-white'>{variant == "login" ? "Login" : "Sign up"}</button>
                        <div className='flex flex-row items-center gap-4 mt-10 justify-center'>
                            <div className='bg-white cursor-pointer rounded-full items-center justify-center'>
                                <FcGoogle size={40} />
                            </div>
                            <div className='bg-white cursor-pointer rounded-full items-center justify-center'>
                                <FaGithub size={40} />
                            </div>
                            <div className='bg-white text-blue-700 cursor-pointer rounded-full items-center justify-center'>
                                <FaFacebook size={40} />
                            </div>
                        </div>
                        <p className='text-white font-bold mt-12 text-center'>
                            {variant == "login" ? "First time using Netflix?" :
                                "Already have an account?"} <span onClick={toggleVariant}
                                    className='text-red-700 cursor-pointer hover:underline transition'>
                                {variant == "login" ? "Create an account" : "Sign in"}</span> here.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth
