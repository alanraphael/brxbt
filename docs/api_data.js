define({ "api": [
  {
    "type": "get",
    "url": "/api/bitvalor",
    "title": "Ordens das exchanges brasileiras",
    "version": "0.1.0",
    "name": "BitValor",
    "group": "BitValor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_type",
            "description": "<p>Tipo da ordem.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exchange",
            "description": "<p>Legenda da exchange.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price_gte",
            "description": "<p>Preço maior ou igual.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price_lte",
            "description": "<p>Preço menor ou igual.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volume_gte",
            "description": "<p>Volume maior ou igual.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volume_lte",
            "description": "<p>Volume menor ou igual.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/api/bitvalor?order_type=bids&exchange=LOC&price_gte=16000&price_lte=18000&volume_gte=0.09&volume_lte=0.5",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/bitvalor/controller.ts",
    "groupTitle": "BitValor"
  }
] });
