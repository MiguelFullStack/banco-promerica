
export const ErrorCreditCard = ({errors, touched}) => {
    return (
      <>
        {touched.card && errors.card}
        {touched.cvv && errors.cvv}
      </>
    )
  }
  