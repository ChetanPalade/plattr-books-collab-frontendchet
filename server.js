const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const dbURI = "mongodb+srv://cwpalade97:ChetanVk189@cluster0.t72we.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

require("dotenv").config();

app.use(cors());
app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);

mongoose.connect(dbURI,{useNewURLParser:true, useUnifiedTopology:true})
.then(() => console.log('Mongo Connected'))
.catch(err => console.error("Mongodb Connection error:",err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});