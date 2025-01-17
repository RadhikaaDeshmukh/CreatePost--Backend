const express = require('express');
const mongoose = require("mongoose");
const PORT = 5000;
const userRouter = require('./Router/userRouter')
const cors = require('cors');

const app = express();
app.use(express.json());

const corsOption = {
    origin:'http://localhost:5173',
    // methods : "GET, POST, PUT, DELETE, PATCH, HEAD",
    // Credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption));

//Mongodb connection 
mongoose.connect("mongodb://127.0.0.1:27017/merndb")
.then(() => {
    console.log('Mongodb connected Successfully');
})
.catch((error) => {
    
});

//Route connection
// app.get("/" , (req,res) => {
//     res.send("Api running");
// })

app.use('/user', userRouter)


app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
});

