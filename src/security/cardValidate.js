export const cardValidate = ({
    values,
    errorCard = 'El campo numero de tarjeta es requerido',
    errorNumberCard = 'Por favor introduzca 16 caracteres',
    errorMonth = 'Por favor coloca un mes valido',
    errorYear = 'Por favor coloca un año valido',
    errorCvv = 'El campo cvv es requerido'
}) => {

    let errors = {}
    
    values.card = values.card.toString().replace(/[^0-9]*$/, '')
    values.cvv  = values.cvv.toString().replace(/[^0-9]*$/, '')

    if (values.card == false) {
        errors.card = errorCard 
    }

    if (values.card.toString().length <= 15) {
        errors.card = errorNumberCard 
    }
    if(values.month === 'mes') {
        errors.month = errorMonth
    }
    
    if(values.month === '') {
        errors.month = errorMonth
    }

    if(values.year === 'año') {
        errors.year = errorYear
    }

    if(values.year === '') {
        errors.year = errorYear
    }

    if (values.cvv == false) {
        errors.cvv = errorCvv
    }

    if (values.cvv.length === 0) {
        errors.cvv = errorCvv
    }

    return errors

}