import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { Auth } from './Auth'

export const Router = () => (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/auth" element={<Auth/>}/>
    </Routes>
)