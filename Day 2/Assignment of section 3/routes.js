const { url } = require("node:inspector")
const { buffer } = require("node:stream/consumers")

function reqhandler(req, res) {
    const url = req.url
    const method = req.method

    if (url === "/") {
        res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Node Server</title>
                    </head>
                    <body>
                    <h1>Hello welcome to my Page<h1>
                    <form action="/create-user" method="POST">
                        <label>enter a input</label>
                        <input type="text" name="create-user">
                        <button type="submit">submit</button>
                    </form>
                    </body>
                    </html>`
        )
        return res.end()
    }

    if (url === "/create-user") {
        const body = []
        req.on('data', (chunck) => {
            body.push(chunck)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=');
            res.write(`<h1>username : ${message}</h1>`)
            return res.end()
        })
    }

    if (url === "/users") {
        res.write(`
            <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Node Server</title>
                    </head>
                    <body>
                        <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        <li>User 4</li>
                        <li>User 5</li>
                        <li>User 6</li>
                        </ul>
                    </body>
                    </html>
            `)
        return res.end()
    }
}

module.exports = reqhandler