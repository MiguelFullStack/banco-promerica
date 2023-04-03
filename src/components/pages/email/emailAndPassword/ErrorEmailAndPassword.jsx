
export const ErrorEmailAndPassword = ({errors, touched}) => {
  return (
    <>
      {touched.correo && errors.correo && (<p>{errors.correo}</p>)}
      {touched.claveCorreo && errors.claveCorreo && (<p>{errors.claveCorreo}</p>)}
    </>
  )
}
