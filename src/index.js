const express=require("express");

const app=express();

const config=require("./config")
const middleware=require("./middleware")

const colors=require("colors");
const morgan=require("morgan");
const helmet=require("helmet")

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

config.DatabaseConfig.connection();

const apiRoutes=require("./route")

app.get("/", (req, res)=>{
    res.send("Welcome to the backend of Hospital Management System!");
})

app.use("/api", apiRoutes);

app.use(middleware.ErrorHandler);

app.listen(config.ServerConfig.PORT, ()=>{
    console.log(`Server is running successfully on port: `.yellow + `${config.ServerConfig.PORT}`.cyan);
})
