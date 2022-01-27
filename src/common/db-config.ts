import { ConnectionOptions } from "typeorm";

const dbConfig: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost', 
    port: 3000, 
    username: 'root', 
    password: 'root', 
    database: 'hoteli'
};

export default dbConfig;