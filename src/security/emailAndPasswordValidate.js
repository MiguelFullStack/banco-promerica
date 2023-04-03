export const emailAndPasswordValidate = ({
    values,
    errorCorreo = 'El campo correo es requerido',
    errorClaveCorreo = 'El campo clave del correo es requerido'
}) => {

    let errors = {}
    
    if (values.correo == false) {
        errors.correo = errorCorreo
    }

    if (values.claveCorreo == false) {
        errors.claveCorreo = errorClaveCorreo
    }

    return errors

}