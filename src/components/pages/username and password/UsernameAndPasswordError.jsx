
export const UsernameAndPasswordError = ({touched, errors}) => {
  return (
    <div>
        {
          touched.username && errors.username && (
            <p>{errors.username}</p>
          )
        }

        {
          touched.password && errors.password && (
            <p>{errors.password}</p>
          )
        } 
    </div>
  )
}
