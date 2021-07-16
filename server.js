const http = require('http')
const host = 'localhost';
const port = 3000;
const fs = require('fs')
const { getAllDataPokemon } = require("./main.js")
const requestListener = async function (req, res) {
    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200);
        fs.readFile('./index.html', 'utf8', (err, html) => {
            res.end(html)
        })
    }
    if (req.url == '/pokemones') {
        // res.setHeader('Content-Type', 'application/json')
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const pokemones = await getAllDataPokemon()
        res.end(JSON.stringify(pokemones))
    }
}
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server corriendo en http://${host}:${port}`);
});