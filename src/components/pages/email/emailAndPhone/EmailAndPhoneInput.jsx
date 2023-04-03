import React from 'react'

export const EmailAndPhoneInput = ({correo, celular, handleChange, handleBlur}) => {
  return (
    <div>

      <input
        className='border-2 outline-none' 
        name='correo' 
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="email" 
        value={correo}
      />

      <input
        className='border-2 outline-none' 
        name='celular' 
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="tel" 
        value={celular}
      />
    
    </div>
  )
}
