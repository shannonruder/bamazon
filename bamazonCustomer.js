var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "!!!MySQL123!!!", //Your password
    database: "Bamazon_db"
})
// **************************************************************************************************************************
//Check and Buy Function displays all items from mysql and then adds functionality to buy an item with quantity choices.
// **************************************************************************************************************************

var checkAndBuy = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        //Creates a new table with a command line view 
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
        });
       
        //Displays all items for sale
        console.log("HERE ARE ALL THE ITEMS AVAILABLE FOR SALE: ");
        console.log("===========================================");
        for (var i = 0; i < res.length; i++) {
            if (err) console.log("Oops... Something went wrong");
            table.push([res[i].itemId, res[i].productName, res[i].departmentName, res[i].price.toFixed(2), res[i].stockQuantity]);
        }
       console.log("-----------------------------------------------");
          

        //Logs the table with items for purchase
        console.log(table.toString());
        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "What is the item ID you would like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {
            var chosenId = answer.itemId - 1
            var chosenProduct = res[chosenId]
            var chosenQuantity = answer.Quantity
            if (chosenQuantity < res[chosenId].stockQuantity) {
                console.log("Your total for " + "(" + answer.Quantity + ")" + " - " + res[chosenId].productName + " is: " + res[chosenId].price.toFixed(2) * chosenQuantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stockQuantity: res[chosenId].stockQuantity - chosenQuantity
                }, {
                    id: res[chosenId].id
                }], function(err, res) {
                    //console.log(err);
                    checkAndBuy();
                });

            } else {
                console.log("Sorry, insufficient Quanity at this time. All we have is " + res[chosenId].stockQuantity + " in our Inventory.");
                checkAndBuy();
            }
        })
    })
}


checkAndBuy();
