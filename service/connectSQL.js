const  request  = require('express');
var sql = require('mssql/msnodesqlv8');  
const app = request();
var config = {  
    server: 'localhost', 
    user: 'ducmanh',
    password: '1234', 
    database: "CNPM",
    driver:"msnodesqlv8"  
}
const connect = new  sql.ConnectionPool(config).connect().then(pool=>{
    return pool;
});
module.exports = 
{
    connect: connect,
    sql: sql
};






    