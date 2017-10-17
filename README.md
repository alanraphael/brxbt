# BRXBT
API de consulta de índice e dados consolidados das exchanges.

### Requisitos
- Nodejs >= 6.11

## Acesso a documentação
Toda a documentação da API se encontra no diretório `docs` no formato HTML. Caso não tenha nenhum servidor de arquivos estáticos instalados poderá instalar o `http-server`. [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server)

## Como executar
Clone o reposítório. Dentro do diretório, rode o comando `npm install`.
Após a instalação, rode o comando `npm start` para iniciar o servidor. Basta acessar `http://localhost:3000/api/bitvalor`.

**Obs.:** A API do BitValor só permite 1 request por minuto, então o resultado será armazenado em cache. O primeiro acesso, com o cache vazio, poderá ser um pouco mais lento devido a latência de rede.

## Testes
Para executar os testes, rode o comando `npm test`.
