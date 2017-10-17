define({ "api": [
  {
    "type": "get",
    "url": "/api/bitvalor",
    "title": "Ordens das exchanges brasileiras",
    "name": "BitValor",
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
            "description": "<p>Código da exchange.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"order_type\": \"bids\",\n    \"exchange\": \"LOC\",\n    \"price_gte\": 16000,\n    \"price_lte\": 18000,\n    \"volume_gte\": 0.09,\n    \"volume_lte\": 0.5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/modules/bitvalor/controller.ts",
    "group": "_home_alan_Developer_teste_ez5_BRXBT_src_modules_bitvalor_controller_ts",
    "groupTitle": "_home_alan_Developer_teste_ez5_BRXBT_src_modules_bitvalor_controller_ts"
  }
] });
