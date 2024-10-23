// Importação do HTTP do Node.js (módulo nativo)
import http from "http";

const server = http.createServer((request, response) => {
  /**
   * Request - Consigo obter todas as informações da requisião que está
   * chegando no meu servidor.
   *
   * Response - Consigo enviar uma resposta para o cliente que está fazendo
   * a requisição.
   */

  return response.end("Hello World");
});

// A aplicação irá escutar a porta 3333.
// localhost:3333
server.listen(3000);
