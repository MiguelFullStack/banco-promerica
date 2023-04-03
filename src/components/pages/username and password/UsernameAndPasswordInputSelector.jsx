import React from 'react'

export const UsernameAndPasswordInputSelector = ({selectActive, setSelectActive, selectItem, setSelectItem, opciones}) => {
    return (
        <>
            <div className="relative">
                <div 
                    className=" rounded shadow-sm text-sm dropbox flex justify-between items-center "
                    onClick={() => setSelectActive( !selectActive )}
                >
                    <div className="bg-none">
                        <p className="text-[#555f83] text-sm poppins-medium">{selectItem}</p>
                    </div>
                    <i className={selectActive === true ? 'triangulo-arriba' : 'triangulo-abajo'}></i>
                </div>

                <div 
                    className={selectActive === true ? 'absolute opciones mt-2 shadow w-full' : 'absolute opciones mt-2 shadow w-full hidden'} 
                    style={{ zIndex: '100' }}                    
                >					
                    {
                        opciones.map((e, i) => 
                            <p 
                                key={i}
                                onClick={() => {
                                    setSelectItem(e)
                                    setSelectActive(false)
                                }}
                                className="hover:bg-[#0081ff] text-[#555f83] hover:text-white py-3 px-2 text-sm odd:bg-[#f3f6fe] even:bg-[#ffffff]" >
                                {e}
                            </p>
                        )
                    }
                    
                </div>
            </div>
        </>
    )
}
