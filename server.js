const http = require("http");
const { greetings } = require("./hello-world");
{greetings}
const server = http.createServer((req,res)=>{

});

server.listen(3000, () => {
   greetings()
});