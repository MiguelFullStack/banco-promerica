
export const loader = (timeLoader, navigate, urlToNavigate, endUrl = '' ) => {
    console.log(endUrl)
    setTimeout(() => {
        return endUrl != '' ? window.location.href = endUrl : navigate(`/${urlToNavigate}`)
    }, timeLoader);
}
