var mysql=require('mysql');
var inquirer=require('inquirer');

var connection=mysql.createConnection({
		host:"localhost",
		port: 3306,
		user:"root", //Your username//
		password:"asdfghjkl8465", //Your password//
		database:"bamazon"})

connection.connect(function(err){
	if(err){
		console.error("error connecting: "+ err.stack);}
	connection.query('SELECT * FROM products',function(err,res){
		if(err)throw err;
		//PRINTS THE TABLE TO THE CONSOLE WITH MINIMAL STYLING//
		var tab="\t";
		console.log("id\tproduct\tdepartmentField\tprice\tquantity");
		console.log("--------------------------------------------------------");
		//FOR LOOP GOES THROUGH THE MYSQL TABLE AND PRINTS EACH INDIVIDUAL ROW ON A NEW LINE//
		for(var i=0;i<res.length;i++){
			console.log(res[i].id+tab+res[i].product+tab+res[i].departmentField+tab+res[i].price+tab+res[i].quantity);}
		console.log("--------------------------------------------------------");
		//RUNS THE CUSTOMER'S PROMPTS AFTER CREATING THE TABLE. SENDS res SO THE promptCustomer FUNCTION IS ABLE TO SEARCH THROUGH THE DATA//
		promptUser(res);})}})

