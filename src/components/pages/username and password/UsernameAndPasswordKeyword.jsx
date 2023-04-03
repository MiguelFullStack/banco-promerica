import { useState } from "react";

const  arrNumber = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].sort( () => Math.random() - 0.5 );

export const UsernameAndPasswordKeyword = ({afterPasswordValue, setPasswordValue}) => {
 
    const [hover, setHover] = useState(false);

    return (
        <div id="botonesteclado" className="min-w-[20px]  grid grid-cols-3 gap-1">
            {
                arrNumber.map( e => (
                    <button 
                        key={e}
                        type="button" 
                        className="keyboard-button" 
                        onMouseEnter={ () => setHover(true) } 
                        onMouseLeave={ () => setHover(false) }

                        onTouchStart={ () => setHover(true) } 
                        onTouchMove={ () => setHover(false) }
                        onTouchEnd={   () => setHover(false) } 

                        onClick={ () => setPasswordValue( `${afterPasswordValue + e}`) }
                    >
                        { hover === true ? "*" : e}
                    </button>
                ))
            }
            <button 
                type="button" 
                className="keyboard-button-borrar grid col-start-2 col-end-4 items-center"
                onClick={() => setPasswordValue("")}
            >
                borrar
            </button>
        </div>
    )
}
