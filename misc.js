        //set paid by based on button clicked
        function paid_by(data){
        	document.getElementById("Paid_With").value = data;
        }
        //set Category and Sub Category based on description
        function predict_category_info(data){
                data = data.toLowerCase();
        	if(data.includes("nature")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Non Veg";
        	}
        	if(data.includes("vegetable")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Vegetables";
        	}
        	if(data.includes("dmart") || data.includes("carry") || data.includes("bread")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Food and Household";
        	}
        	if(data.includes("milk")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Milk";
        	}
        	if(data.includes("fruit") || data.includes("apple") || data.includes("orange") || data.includes("bannanas")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Fruits";
        	}
        	if(data.includes("fish")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Non Veg";
        	}
        	if(data.includes("egg")){
        		document.getElementById("Category").value = "Grocery";
        		document.getElementById("Sub_Category").value = "Non Veg";
        	}
        	if(data.includes("poda")){
        		document.getElementById("Category").value = "Outside Food";
        		document.getElementById("Sub_Category").value = "Chicken Poda";
        	}
        	if(data.includes("brijwasi") || data.includes("ramas")){
        		document.getElementById("Category").value = "Outside Food";
        		document.getElementById("Sub_Category").value = "Snacks";
        	}
                if(data.includes("paneer")){
                        document.getElementById("Category").value = "Outside Food";
                        document.getElementById("Sub_Category").value = "Cooked Meals";
                }
        	if(data.includes("swiggy") || data.includes("zomato") || data.includes("domino") || data.includes("donald") || data.includes("pizza") || data.includes("hotel")){
        		document.getElementById("Category").value = "Outside Food";
        		document.getElementById("Sub_Category").value = "Readymade Meals";
        	}
        	if(data.includes("gas")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Pipe Gas";
        	}
        	if(data.includes("sky")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Dish TV";
        	}
        	if(data.includes("mtnl")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Broadband";
        	}
        	if(data.includes("electricity")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Electricity";
        	}
        	if(data.includes("gayatri") || data.includes("maintenence")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Society Maintenence";
        	}
        	if(data.includes("emi") || data.includes("loan")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Epsilon Home Loan";
        	}
        	if(data.includes("school") || data.includes("fees")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "School Fees";
        	}
        	if(data.includes("maid")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "House Work";
        	}
        	if(data.includes("apy") || data.includes("equity") || data.includes("share") || data.includes("lic")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Savings";
        	}
        	if(data.includes("animal") || data.includes("pintu")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Donation";
        	}
        	if(data.includes("charge")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Mobile";
        	}
        	if(data.includes("salary") || data.includes("rent")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Income";
        	}
        	if(data.includes("football")){
        		document.getElementById("Category").value = "Monthly";
        		document.getElementById("Sub_Category").value = "Kids Clubs";
        	}
        	if(data.includes("toll")){
        		document.getElementById("Category").value = "Travel";
        		document.getElementById("Sub_Category").value = "Mira Road Toll";
        	}
        	if(data.includes("ola") || data.includes("uber")){
        		document.getElementById("Category").value = "Travel";
        		document.getElementById("Sub_Category").value = "Cabs";
        	}
        	if(data.includes("park") || data.includes("petrol")){
        		document.getElementById("Category").value = "Travel";
        		document.getElementById("Sub_Category").value = "Vehicle Costs";
        	}
        	if(data.includes("hair")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Haircut";
        	}
        	if(data.includes("clap")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Salon";
        	}
        	if(data.includes("brows")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Salon";
        	}
        	if(data.includes("medicine") || data.includes("noble")){
        		document.getElementById("Category").value = "Life Needs";
        		document.getElementById("Sub_Category").value = "Medicines";
        	}
        	if(data.includes("central") || data.includes("shopper") || data.includes("dress")){
        		document.getElementById("Category").value = "Shopping";
        		document.getElementById("Sub_Category").value = "Clothes";
        	}
        	if(data.includes("movie")){
        		document.getElementById("Category").value = "Shopping";
        		document.getElementById("Sub_Category").value = "Entertainment";
        	}
        }