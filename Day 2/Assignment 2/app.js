const express = require('express')
const app = express()


app.use('/users' ,(req , res , next) =>{
    res.send(`
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
})


app.use('/' ,(req , res , next) =>{
    res.send("<h1>you are at / endpoint</h1>")
})

app.listen(3000)