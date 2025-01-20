import express from "express"

const app = express()
const port = 3000

function customMiddleware(props:any) {
  return props
}

app.get('/', customMiddleware, (req, res) => {
    res.status(200)
    res.json({message: "Hello world"})
})

app.listen(port, () => {
    console.log('server listening on port', port)
})