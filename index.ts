
const Server = Bun.serve({
    port:process.env.PORT,
    fetch(req: Request) {
        const url = new URL(req.url);
        if (url.pathname ==='/') return new Response('Home Page!');
        if (url.pathname ==='/test') return new Response('Test Page!');
      return new Response("404!!!");
    },
  });
  
  console.log(`Listening on port: ${Server.port}`)

  export default Server;