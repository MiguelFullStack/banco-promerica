export const usernameAndPasswordValidate = ({
        values, 
        virtualKeyword,
        errorUsername = 'El campo correo es requerido', 
        errorPassword = 'El campo clave del correo es requerido' 
    }) => {

    let errors = {}
    
    if (values.username == false) {
        errors.username = errorUsername
    }

    if (values.password == false && virtualKeyword == false) {
        errors.password = errorPassword
    }

    return errors

}