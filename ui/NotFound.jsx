import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from './RoutePaths'

export const NotFound = () => {

    const navigate = useNavigate()

    return (
        
        <div className="flex flex-col items-center justify-center h-[calc(100vh-98px)]">
            <h1 className="px-3 py-2 text-4xl text-base font-medium">404 Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>

            <button onClick={() => navigate(RoutePaths.HOME)} className="mt-7 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Go to Homepage</button>
        </div>
    )
}