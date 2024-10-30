// Importação do HTTP do Node.js (módulo nativo)
import http from "http";

const users = [];

const server = http.createServer((request, response) => {
  /**
   * Request - Consigo obter todas as informações da requisião que está
   * chegando no meu servidor.
   *
   * Response - Consigo enviar uma resposta para o cliente que está fazendo
   * a requisição.
   */

  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Bruno Milano",
      email: "brnmilano@hotmail.com",
    });

    return response.writeHead(201).end();
  }

  return response.writeHead(404).end();
});

// A aplicação irá escutar a porta 3333.
// localhost:3333
server.listen(3333);
