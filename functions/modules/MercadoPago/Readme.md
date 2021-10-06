# MercadoPago Server Functions by FaqToff

Modulo de integracion de CheckOut Pro de MercadoPago con Firebase Cloud Functions.

Autor: Facundo Toffolo Pasquini
Fecha: 04/10/2021

## Descripcion

## Instrucciones

### 1er Paso:

Debes instalar el paquete de Mercado Pago

### 2do Paso:

Incluir la carpeta en el Proyecto

## Pruebas

### MercadoPago Config

Para realizar pruebas debes configurar las variables de entorno de Firebase con los AccesToken de MercadoPago

### Firebase Config

```
firebase emulators:start --only functions
```

Debe realizarse una request a la api `http://localhost:5001/proyect-name/us-central1/mercadoPago-mercadoPago/create_preference` con el metodo POST, y en el body debe contener los siguientes items:

```
    {
        "items": [
        {
            "id": "01",
            "title": "Portfolio Online",
            "currency_id": "ARS",
            "picture_url": "pics.com/sf.jpg",
            "description": "Pagina web de referencia personal y profesional",
            "category_id": "in",
            "quantity": 1,
            "unit_price": 1500
        }
        ],
        "external_reference": "user"
    }
```

La respuesta debera tener una forma como esta:

```
{
    "additional_info": "",
    "auto_return": "approved",
    "back_urls": {
        "failure": "http://tundraarte.com/failure",
        "pending": "http://tundraarte.com/pending",
        "success": "http://tundraarte.com/succes"
    },
    "binary_mode": false,
    "client_id": "4699093593447400",
    "collector_id": 799236112,
    "coupon_code": null,
    "coupon_labels": null,
    "date_created": "2021-10-04T21:44:10.139+00:00",
    "date_of_expiration": null,
    "expiration_date_from": null,
    "expiration_date_to": null,
    "expires": false,
    "external_reference": "user",
    "id": "799236112-c2823e93-547a-451a-ba8c-9cbf94d2a227",
    "init_point": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=799236112-c2823e93-547a-451a-ba8c-9cbf94d2a227",
    "internal_metadata": null,
    "items": [
        {
            "id": "01",
            "category_id": "in",
            "currency_id": "ARS",
            "description": "Pagina web de referencia personal y profesional",
            "picture_url": "pics.com/sf.jpg",
            "title": "Portfolio Online",
            "quantity": 1,
            "unit_price": 1500
        }
    ],
    "marketplace": "NONE",
    "marketplace_fee": 0,
    "metadata": {},
    "notification_url": "https://us-central1-tundra-arte.cloudfunctions.net/faqtoffapi/mp/webhook",
    "operation_type": "regular_payment",
    "payer": {
        "phone": {
            "area_code": "",
            "number": ""
        },
        "address": {
            "zip_code": "",
            "street_name": "",
            "street_number": null
        },
        "email": "",
        "identification": {
            "number": "",
            "type": ""
        },
        "name": "",
        "surname": "",
        "date_created": null,
        "last_purchase": null
    },
    "payment_methods": {
        "default_card_id": null,
        "default_payment_method_id": null,
        "excluded_payment_methods": [
            {
                "id": ""
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 6,
        "default_installments": null
    },
    "processing_modes": null,
    "product_id": null,
    "redirect_urls": {
        "failure": "",
        "pending": "",
        "success": ""
    },
    "sandbox_init_point": "https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=799236112-c2823e93-547a-451a-ba8c-9cbf94d2a227",
    "site_id": "MLA",
    "shipments": {
        "default_shipping_method": null,
        "receiver_address": {
            "zip_code": "",
            "street_name": "",
            "street_number": null,
            "floor": "",
            "apartment": "",
            "city_name": null,
            "state_name": null,
            "country_name": null
        }
    },
    "statement_descriptor": "Tienda eCommerce Tundra Arte",
    "total_amount": null,
    "last_updated": null
}
```
