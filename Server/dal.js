/***************************************************************
 *        DAL 
 * *************************************************************/ 
const mysql = require('mysql');


// This function runs the query in the db
function runSqlQuery( query, mainCallBack)
{
    // initialize connection parameters
    const myCon = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'northwind'
    });

    // Connect to db
    myCon.connect( connectCallback( err) );


    // execute SQL query
    myCon.query(query, conQueryCallback);

    myCon.end();
}

/***************************************************************
 *        CALLBACKS
 * *************************************************************/ 

// This is the callback for the myCon.query 
function conQueryCallback( er, rows)
{
    if( err )
    {
        mainCallBack(er);
    }
    else
    {
        mainCallBack(null, rows);
    }
}


// This is the callback func for  myCon.connect
function connectCallback( err)
{
    // if an error occured in mysql.connection.connect 
    if(err)
    {
        console.log("Failed connecting to db " + err);
        return;
    }

    // Connection to db succeed
    console.log('Connected to db succesfuly');
}


module.exports.runSqlQuery = runSqlQuery;

