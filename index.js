const express = require('express')

const port = process.env.PORT || 3000;
const App = express();

App.get('/message', (req,res) => {
    res.status(200).json({
        message: "Hello world"
    })
})

App.listen(port, () => {
    console.log('Listen port 3000')
})