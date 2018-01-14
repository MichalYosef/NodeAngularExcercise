const bl = require ('./bl');

// Shippers CRUD

function read( readCallback )
{
    bl.read( 'shippers', function( err, returnedObjArr)
    {
        if( err )
        {
            readCallback( err );
        }
        else
        {
            readCallback( null, returnedObjArr )

        }
    } );
}



module.exports = {
    read: read
};