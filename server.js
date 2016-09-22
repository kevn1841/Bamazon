var mysql=require('mysql');
var inquirer=require('inquirer');

var connection=mysql.createConnection({
		host:"localhost",
		port: 3306,
		user:"root",
		password:"asdfghjkl8465",
		database:"bamazon"})

connection.connect(function(err){
	if(err){
		console.error("error connecting: "+ err.stack);}
		createListing();

})

	function createListing(){
	connection.query('SELECT * FROM forsale',function(err,res){
		if(err)throw err;
		var tab="\t";
		console.log("id\tproduct\tdepartmentField\tprice\tquantity");
		console.log("========================================================");
		for(var i=0;i<res.length;i++){
			console.log(res[i].id+tab+res[i].product+tab+res[i].departmentField+tab+res[i].price+tab+res[i].quantity+'\n'+'\n');}
		console.log("========================================================");
		promptCustomer(res);})}

function promptCustomer(res){
	inquirer.prompt([
		{type:'input',
		name:'choice',
		message:'Type in the item(s) that you wish to purchase. Type Q to quit.'}]).then(function(val){
		var correct=false;
		for(var i=0;i<res.length;i++){
			if(res[i].product==val.choice){
				var correct=true;
				var Product=val.choice;
				var id=i;
				inquirer.prompt([
					{type:'input',
					name:'quant',
					message:"Type in the quantity"}]).then(function(val){
					if((res[id].quantity-val.quant)>0){
						connection.query("UPDATE forsale SET quantity='"+(res[id].quantity-val.quant)+"' WHERE product='"+Product+"'", function(err, res2){
							if(err)throw err;
							createListing();
							thankYou();
						}

							)}

					else{
						console.log("Please put in a proper request");
						promptCustomer(res);}})}
			if(val.choice=="Q"){process.exit()}}
		if(i==res.length&&correct==false){
			console.log("Please put in a proper request");
			promptCustomer(res);}
		})}

		function thankYou(){
			console.log("Enjoy your new product(s)")
		};