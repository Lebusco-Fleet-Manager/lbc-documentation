---
title: Geoposiciones
description: Instrucciones para enviar la ubicación de las unidades al portal.
---

### Enviar Geoposición al Portal

URL base: https://mzmyuhyfqrbpjnmanxag.supabase.co/rest/v1/apikey={token}

El `token` debe ser solicitado para la autorización.

Enviar la posición de las unidades al endpoint
[/unit_pos](https://mzmyuhyfqrbpjnmanxag.supabase.co/rest/v1/unit_pos?apikey={token})
con el metodo `POST` en formato `JSON`. Ejemplo:

```json
{
  "avl_id": 27755054,
  "position": "POINT(-69.907976 18.459798)",
  "speed": "40 km/h"
}
```

#### Parámetros

- `avl_id` (obligatorio): Un número entero, es el ID de la unidad GPS en la plataforma.
- `position` (obligatorio): Una cadena de texto, indica la geolocalización actual de la unidad GPS.
  donde el primer número es la longitud y el segundo latitud. Ejemplo `"POINT( longitud latitud)"`
- `speed` (opcional): Una cadena de texto, indica la velocidad actual de la unidad GPS.
