var dal = require('./dal');
var models = require('./models');

// Generic get (READ) 
function read( tblName, readCallback )
{
    // initialize the sql query
    let sqlQuery = 'SELECT * FROM '+ tblName;
    
    // run the query
    dal.runSqlQuery(sqlQuery, function(err, rows) 
    {
        // if an error returned send it to the callback
        if (err) 
        {
            readCallback(err);
            return;
        }

        // initialize an array for objects to create from the db data that returned
        const objectsArr = [];

        // create a new object of each row (created by the factory according to tblName)
        rows.forEach(function (row) 
        {
            objectsArr.push( models.Factory( tblName, row));
        });

        // suucceed. returned objects array to callback
        readCallback(null, objectsArr);
    });

}





module.exports.CRUD = {
    // create: create,
    read: read/*,
    update: update,
    delete: delete*/
};