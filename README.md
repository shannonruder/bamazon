#bamazon

A Node.js & MySQL command line Amazon-like storefront app that takes in customers orders and depletes stock from the stores Inventory. 

### Overview


## Usage

1. Clone repo
2. npm install
3. cd Bamazon
4. node server.js
5. run it locally. Default Port will be PORT 3306 in any browser.


## Tech Used 

* Node.js 
* Javascript
* MySQL 
* Cli-View 

#### Instructions:

### Challenge #1: Customer View (Minimum Requirement)

1. Database is called `Bamazon`.

2. There is a Table inside of that database called `products`.

3. The products table was created with the following columns.

	* itemID (unique id for each product)

	* productName (Name of product)

	* departmentName 

	* price (cost to customer)

	* stockQuantity (how much of the product is available in stores)

4. I populated the database with 10+ different products. 

5. There is a Node application called `BamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. Bamazon then prompts users with two messages. 
	* The first ask them the ID of the product they would like to buy. 
	* The second message should ask how many units of the product they would like to buy.

7. Once an order has been placed the application then checks to see if the store has enough of the product to meet the user's request. 
	* If not, the app will log: `Insufficient quantity!`, and then prevent the order from going through.

8. However, if the store *does* have enough of the product, It will fulfill the users's order. 
	* This means updating the SQL database to reflect the remaining quantity.
	* Once the update goes through, it will show the customer the total cost of their purchase.

---------------------------------



