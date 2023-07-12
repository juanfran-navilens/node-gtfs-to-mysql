const mysql = require('mysql2');

export class Database {
    connection;

    constructor() {
        //Create the connection to mysql database
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 13306,
            user: 'root',
            password: '1234',
            database: 'mysql_gtfs'
        });
    }

    //Creates a query to the connection
    prepare(query) {
        this.connection.execute(
            query, (error, results) => {
                if (error) throw error;
                console.log(results);
                return results;
            }
        );
    }
}