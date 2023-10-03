const server = Bun.serve({
    port:5000,
    fetch(req: Request) {
      return new Response("Hello World!!!");
    },
  });
  
  console.log(`Listening on port: ${server.port}`)