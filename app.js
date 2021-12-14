const express = require("express");
const app = express();
const path = require("path");
const port = 3030;


/* Middleware */
//utilizamos el metodo use de express
app.use(express.static('public'))


/* Routing */
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

/* Server */
app.listen(port, () => console.log(`server running in ${port}\n***************************\nlink: http://localhost:${port}`))
//levantamos un servidor en el puerto 3030