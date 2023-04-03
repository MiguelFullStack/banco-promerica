import React from 'react'

export const CreditCardInput = ({card, month, year, cvv, handleChange, handleBlur}) => {
  return (
    <>

      <input
        required
        className='border-2 outline-none' 
        onChange={handleChange}
        name='card' 
        type="number" 
        value={card}
        onBlur={handleBlur}
      />

        <div className='flex gap-2'>
                    
            <select 
                required 
                name="month" 
                value={month}
                className='border-[1px] border-[#CCCCCC] py-[5px] text-sm w-32 outline-none'
                onChange={handleChange}
            >
                {
                    [...Array(13)].map( (_, i) => {
                        if (i == 0) {
                            return (
                                <option value='mes' key={i} className='font-normal '>mes</option>
                            )
                        }
                        return (
                            <option value={i} key={i} className='font-normal '>{i < 10 ? `0${i}` : i }</option>
                        )
                    })
                }
            </select>
            <select 
                required 
                name="year"
                value={year}
                className='border-[1px] border-[#CCCCCC] py-[5px]  text-sm w-full outline-none'
                onChange={handleChange}    
            >
                {
                    [...Array(15)].map( (_, i) => {

                        if (i == 0) {
                            return (
                                <option value={'año'} key={i} className='font-normal'>año</option>
                            )
                        }
                        
                        return (
                            <option value={2021 + i} key={i++} className='font-normal' >{ 2021 + i }</option>
                        )
                    })
                }
            </select>

        </div>
        
        <input
            required
            className='border-2 outline-none' 
            onChange={handleChange}
            name='cvv' 
            type="password"
            inputMode='numeric' 
            value={cvv.slice(0, 3).replace(/[^0-9]*$/, '')}
            onBlur={handleBlur}
        />

    </>
  )
}
