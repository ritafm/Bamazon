var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazonDB'
});


connection.connect(function (err) {
    if (err) throw err;
    products();
});

function products() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
        }
        start();
    });
}

function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw console.log("connection error:" + err);
    inquirer
        .prompt([
                {
                    name: 'selectId',
                    type: 'input',
                    message: 'Enter the id number you want to purchase:',
        },

                {
                    name: 'amountBought',
                    type: 'input',
                    message: 'How many would you like?',
                }
            ]).then (function (answers) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, {
                id: answers.selectId
            }, function (err, res) {
                console.log(res);

                var inStock = res[0].stock_quantity;
                var itemBought = answers.amountBought;

                if (inStock >= itemBought) {
                    var leftInStock = inStock - itemBought;
                    
                    var totalPrice = res[0].price * itemBought;
                    var itemPurchased = res[0].product_name;
                    
                    console.log(totalPrice + "  total price of items bought");
                    
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [
                            {
                                stock_quantity: leftInStock
                                
                        },
                            {
                                id: answers.selectId
                        }

                    ],
                        function (error) {

                            if (error) throw error;
                            console.log("==============================================");
                            console.log("\n\r");
                            console.log("Order details:");
                            console.log("Item bought " + itemPurchased);
                            console.log("Quanity bought " + itemBought + " for $" + res[0].price);
                            console.log("Total Cost: $" + totalPrice);
                            console.log("\n\r");
                            console.log("Thank you for shopping with us.");
                            console.log("==============================================");
                            keepShopping();

                        }
                    );
                } else {
                    console.log("==============================================");
                    console.log("\n\r");
                    console.log("Not enough of that product");
                    console.log("\n\r");
                    console.log("==============================================");
                   products();

                }

            });
        
        });
        });
    }
    
function keepShopping() {
    inquirer
        .prompt([
            {
            name: "confirm",
            type: "confirm",
            message: "Do you want to keep shopping?"
            }
        ]).then(function(confirm){
            console.log(confirm);
            if (confirm.confirm){
                start();
            }else {connection.end()};
        })
}