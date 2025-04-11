module.exports = {
    // Loads and configures environment variables from the .env file
    DotenvConfig: require("./dotenv-config"),
  
    // Exports server-related configurations like port number
    ServerConfig: require("./server-config"),
  
    // Establishes MongoDB database connection
    DatabaseConfig: require("./database-config")
  };
  