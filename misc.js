        //set paid by based on button clicked
        function paid_by(data){
        	document.getElementById("Paid_With").value = data;
        }
        //set Category and Sub Category based on description
        function predict_category_info(data){
        	if(data.toLowerCase().includes("nature")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Non Veg";
        	}
        	if(data.toLowerCase().includes("vegetable")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Vegetables";
        	}
        	if(data.toLowerCase().includes("dmart") || data.toLowerCase().includes("carry") || data.toLowerCase().includes("bread")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Food and Household";
        	}
        	if(data.toLowerCase().includes("milk")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Milk";
        	}
        	if(data.toLowerCase().includes("fruit")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Fruits";
        	}
        	if(data.toLowerCase().includes("fish")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Non Veg";
        	}
        	if(data.toLowerCase().includes("egg")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Non Veg";
        	}
        	if(data.toLowerCase().includes("poda")){
        		document.getElementById("Category").value = "Outside Food";
        		document.getElementById("Sub_Category").value = "Chicken Poda";
        	}
        	if(data.toLowerCase().includes("brijwasi") || data.toLowerCase().includes("ramas")){
        		document.getElementById("Category").value = "Outside Food";
        		document.getElementById("Sub_Category").value = "Snacks";
        	}
        	if(data.toLowerCase().includes("swiggy") || data.toLowerCase().includes("zomato") || data.toLowerCase().includes("domino") || data.toLowerCase().includes("donald") || data.toLowerCase().includes("pizza") || data.toLowerCase().includes("hotel")){
        		document.getElementById("Category").value = "Outside Food";
        		document.getElementById("Sub_Category").value = "Meals";
        	}
        	if(data.toLowerCase().includes("gas")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Pipe Gas";
        	}
        	if(data.toLowerCase().includes("sky")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Dish TV";
        	}
        	if(data.toLowerCase().includes("mtnl")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Broadband";
        	}
        	if(data.toLowerCase().includes("electricity")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Electricity";
        	}
        	if(data.toLowerCase().includes("gayatri") || data.toLowerCase().includes("maintenence")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Society Maintenence";
        	}
        	if(data.toLowerCase().includes("emi") || data.toLowerCase().includes("loan")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Epsilon Home Loan";
        	}
        	if(data.toLowerCase().includes("school") || data.toLowerCase().includes("fees")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "School Fees";
        	}
        	if(data.toLowerCase().includes("maid")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "House Work";
        	}
        	if(data.toLowerCase().includes("apy") || data.toLowerCase().includes("equity") || data.toLowerCase().includes("share") || data.toLowerCase().includes("lic")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Savings";
        	}
        	if(data.toLowerCase().includes("animal") || data.toLowerCase().includes("pintu")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Donation";
        	}
        	if(data.toLowerCase().includes("charge")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Mobile";
        	}
        	if(data.toLowerCase().includes("salary") || data.toLowerCase().includes("rent")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Income";
        	}
        	if(data.toLowerCase().includes("football")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Kids Clubs";
        	}
        	if(data.toLowerCase().includes("toll")){
        		document.getElementById("Category").value = "Travel";
        		document.getElementById("Sub_Category").value = "Mira Road Toll";
        	}
        	if(data.toLowerCase().includes("ola") || data.toLowerCase().includes("uber")){
        		document.getElementById("Category").value = "Travel";
        		document.getElementById("Sub_Category").value = "Cabs";
        	}
        	if(data.toLowerCase().includes("park") || data.toLowerCase().includes("petrol")){
        		document.getElementById("Category").value = "Travel";
        		document.getElementById("Sub_Category").value = "Vehicle Costs";
        	}
        	if(data.toLowerCase().includes("hair")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Haircut";
        	}
        	if(data.toLowerCase().includes("clap")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Salon";
        	}
        	if(data.toLowerCase().includes("brows")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Salon";
        	}
        	if(data.toLowerCase().includes("medicine") || data.toLowerCase().includes("noble")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Medicines";
        	}
        	if(data.toLowerCase().includes("central") || data.toLowerCase().includes("shopper") || data.toLowerCase().includes("dress")){
        		document.getElementById("Category").value = "Shopping";
        		document.getElementById("Sub_Category").value = "Clothes";
        	}
        	if(data.toLowerCase().includes("movie")){
        		document.getElementById("Category").value = "Shopping";
        		document.getElementById("Sub_Category").value = "Entertainment";
        	}
        }