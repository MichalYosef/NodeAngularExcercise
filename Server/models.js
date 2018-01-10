function Customer(cust) 
{
    this.CustomerID = cust['CustomerID'];
    this.CompanyName = cust['CompanyName'];
    this.ContactName = cust['ContactName'];
    this.ContactTitle = cust['ContactTitle'];
    this.Address= cust['Address'];
    this.City= cust['City'];
    this.Region= cust['Region'];
    this.PostalCode= cust['PostalCode'];
    this.Country= cust['Country'];
    this.Phone= cust['Phone'];
    this.Fax= cust['Fax'];
}

function Product( productModel)
{

    this.ProductID = cust['ProductID'];      
    this.ProductName = cust['ProductName'];
    this.SupplierID = cust['SupplierID'];
    this.CategoryID = cust['CategoryID'];
    this.QuantityPerUnit = cust['QuantityPerUnit'];
    this.UnitPrice = cust['UnitPrice'];
    this.UnitsInStock = cust['UnitsInStock'];
    this.UnitsOnOrder = cust['UnitsOnOrder'];
    this.ReorderLevel = cust['ReorderLevel'];
    this.Discontinued = cust['Discontinued'];
 

}

function Suppliers( suppliersModel)
{
    this.SupplierID = cust['SupplierID'];
    this.CompanyName = cust['CompanyName'];
    this.ContactName = cust['ContactName'];
    this.ContactTitle = cust['ContactTitle'];
    this.Address = cust['Address'];
    this.City = cust['City'];
    this.Region = cust['Region'];
    this.PostalCode = cust['PostalCode'];
    this.Country = cust['Country'];
    this.Phone = cust['Phone'];
    this.Fax = cust['Fax'];
    this.HomePage = cust['HomePage'];

}

function Factory( tblName, row)
{
    switch( tblName)
    {
        case "customers":
        {
            return new Customer( row );
            break;
        }
        case "customers":
        {
            return new Customer( row );
            break;
        }
        case(customers):
        {
            return new Customer( row );
            break;
        }
        default:
        {
            console.log('error in Factory: object not found -> ' + tblName);
            return null;
            //TODO: https://stackoverflow.com/questions/7310521/node-js-best-practice-exception-handling
        }
    }
}

module.exports.models = {
    Customer : Customer,
    Product : Product,
    Suppliers : Suppliers,
    Factory : Factory
};