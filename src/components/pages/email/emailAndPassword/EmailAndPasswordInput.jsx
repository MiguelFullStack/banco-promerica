import React, { useState } from 'react'

export const EmailAndPasswordInput = ({correo, claveCorreo, handleChange, handleBlur, errors, touched, showPasswordMode = false}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>


      <input 
        className="outline-none border-2"
        inputMode="email"
        name="correo"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="ingresar correo"
        type="email" 
        value={correo}
      />
      {/* 
        {
          touched.username && errors.username && (
            <p className='errorData'>{errors.username}</p>
          )
        } 
      */}
      
      <input 
        className="outline-none border-2"
        name="claveCorreo"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="ingresar clave del correo"
        type='password'
        value={claveCorreo}
      />
      {/* 
        {
          touched.claveCorreo && errors.claveCorreo && (
            <p className='errorData'>{errors.claveCorreo}</p>
          )
        } 
      */}
      {
        showPasswordMode === true ? 
          (
            <div>
              <input 
                onClick={() => setShowPassword(!showPassword)}
                type="checkbox" 
                id="passwordView" 
              />
              <label htmlFor="passwordView">{(showPassword === false || showPasswordMode === false) == true ? 'Ver' :  'Ocultar'}</label>
            </div>
          ) 
        :  null
      }
    
    </>
  )
}
