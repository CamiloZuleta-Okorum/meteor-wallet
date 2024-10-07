import React, { useState } from 'react'
import { Accounts } from 'meteor/accounts-base'
import { RoutePaths } from './RoutePaths'
import { useNavigate } from 'react-router-dom'
import { ErrorAlert, SuccessAlert } from './components/Alerts'
import { Meteor } from 'meteor/meteor'

export const Auth = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [disabled, setDisabled] = useState(false)

    const [isSignUp, setIsSignUp] = useState(false)

    const showError = ({message}) => {
    
        setSuccess("")
        setError("")
        setError(message)

        setTimeout(() => {
            setError("");
        }, 2500);
    }

    const showSuccess = ({message}) => {

        setError("")
        setSuccess("")
        setSuccess(message)

        setTimeout(() => {
            setSuccess("");
        }, 2500);
    }

    const signUp = (e) => {

        e.preventDefault()
        
        Accounts.createUser({email, password}, (errorResponse) => {

            if (errorResponse) {

                return showError({message: errorResponse.reason || 'Unknow Error'})
            }
            
            showSuccess({message: 'User Created Successfully!'})
            setDisabled(true)
            setTimeout(() => {
                setDisabled(false)
                setEmail("")
                setPassword("")
                setIsSignUp(false)
            }, 2000);
        })
    }

    const signIn = (e) => {

        e.preventDefault()
        
        Meteor.loginWithPassword(email, password, (errorResponse) => {

            if (errorResponse) {

                console.log(errorResponse)

                return showError({message: errorResponse.reason || 'Unknow Error'})
            }
            

            navigate(RoutePaths.HOME)
        })
    }

    return (
        <div className="flex  flex-col items-center justify-center h-[calc(100vh-98px)]">
            <h1 className="px-3 py-2 text-3xl text-base font-medium">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>

                <form className="mt-6 px-20 flex flex-col items-center">
                {
                    error && <ErrorAlert message={error}/>
                }
                {
                    success && <SuccessAlert message={success}/>
                }
                <div className="flex flex-col space-y-4">

                    <div className="">
                        <label className="block text-lg font-medium text-gray-700">
                        Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-96 border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                            disabled={disabled}
                        />
                    </div>

                    <div className="">
                        <label className="block text-lg font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-96 border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                            disabled={disabled}
                        />
                    </div>
                </div>
                <div className="px-1 py-10 flex flex-row items-center space-around">
                <button className="px-5 bg-gray-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-lg font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600" disabled={disabled} onClick={() => navigate(RoutePaths.HOME)}>Cancel</button>

                {
                    isSignUp ? (
                        <button className="ml-3 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" type="submit" disabled={disabled} onClick={signUp}>Sign Up</button>
                    ) : (
                        <button className="ml-3 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" type="submit" disabled={disabled} onClick={signIn}>Sign In</button>
                    )
                }
                </div>
                <div className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                    <p onClick={() => {
                        setIsSignUp(!isSignUp)
                        setEmail("")
                        setPassword("")
                    }}
                    >{isSignUp ? 'Dont Have An Account?': 'Already Have An Account?'}
                    </p>
                </div>
            </form>
        </div>
    )
}