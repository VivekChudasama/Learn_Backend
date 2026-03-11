const fs = require("fs")

function reqHandler(req, res){
const url = req.url;
const method = req.method
    if (url === '/') {
    res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Node Server</title>
                    </head>
                    <body>
                    <form action="/message" method="POST">
                        <label>enter a input</label>
                        <input type="text" name="message">
                        <button type="submit">submit</button>
                    </form>
                    </body>
                    </html>`
    )
    return res.end()
}
if (url === '/message' && method === 'POST') {
    const body = [];
    req.on("data", (chunck) => {
        body.push(chunck);
    })
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile("message.text", message, (err) => {
            res.statusCode = 302
            return res.end()
        })
        res.write(`<h1>${message}</h1>`)

    })
}
}
module.exports = reqHandler

// module.exports = {
//     handler : reqHandler
// }

// exports = reqHandler