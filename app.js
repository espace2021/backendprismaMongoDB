const express=require('express');
const app = express()

//CORS
const cors = require('cors')
app.use(cors());

//BodyParser Middleware
app.use(express.json());

//Requête
app.get("/",(req,res)=>{
    res.send("bonjour");
    });

    
// Appel de routes
const categoriesRouter =require("./routes/categories.route")
app.use('/api/categories', categoriesRouter);
const scategoriesRouter =require("./routes/scategories.route")
app.use('/api/scategories', scategoriesRouter);
const articlesRouter =require("./routes/articles.route")
app.use('/api/articles', articlesRouter);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server is running on port ${PORT} `))


