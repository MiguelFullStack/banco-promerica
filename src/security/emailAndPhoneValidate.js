export const emailAndPhoneValidate = ({values}) => {

    let errors = {}
    
    if (!values.correo) {
        errors.correo = 'El campo correo es requerido'
    }

    if (!values.celular) {
        errors.celular = 'El campo clave del correo es requerido'
    }

    return errors

}