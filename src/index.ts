import express from "express"
import responseRouter from "./response.routes"

const app = express()
const port = 3000

function customMiddleware(props:any) {
  return props
}


//app.use(responseRouter)

app.get('/', customMiddleware, (req, res) => {
    res.status(200)
    res.json({message: "Hello world"})
})

app.listen(port, () => {
    console.log('server listening on port', port)
})