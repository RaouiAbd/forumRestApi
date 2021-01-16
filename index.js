const  express = require('express');
const mongoose = require('mongoose')
const  config = require('./config.json');
const  postRoutes = require('./routes/postRoutes');
const  themeRoutes = require('./routes/themeRoutes');
const  commentRoutes = require('./routes/commentRoutes');
const  forumRoutes = require('./routes/forumRoutes');
const  userRoutes = require('./routes/userRoutes');
const morgan = require('morgan')
const bodyParser =  require("body-parser");
const cors = require("cors");


//app
const app = express()


//db
mongoose.connect(config.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex : true
}).then(() => console.log('DB connected'));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


//Routes
app.use(postRoutes);
app.use(themeRoutes);
app.use(forumRoutes);
app.use(commentRoutes);
app.use(userRoutes)
app.listen(config.port,()=>{
    console.log(`Server Started on port ${config.port}`);
});