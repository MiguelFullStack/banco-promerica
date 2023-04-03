
export const ErrorEmailAndPhone = ({errors, touched}) => {
  return (
    <>
      {touched.correo && errors.correo}
      {touched.celular && errors.celular}
    </>
  )
}
