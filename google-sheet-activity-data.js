// Variable to hold request
var request;

// Daily Log Data - Bind to the submit event of our form
$("#foo").submit(function(event){
       // Abort if Amount and Description is empty
       if(
            document.getElementById("Amount").value == null || 
            document.getElementById("Amount").value == "" || 
            document.getElementById("Description").value == null ||
            document.getElementById("Description").value == ""
        ){
            alert("Resubmit after entering Amount and Description");
            return 0;
       }
       // Abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);

		// Let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");

		// Serialize the data in the form
		var serializedData = $form.serialize();

		// Let's disable the inputs for the duration of the Ajax request.
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);

		// Fire off the request to /form.php
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycbwG5P1XK4mj7Iv7ENlXWgv9fD-uNdzmBTKKA0cVX6aT0mMhnYXL/exec",
			type: "post",
			data: serializedData
    });
    
    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        //redirect to sucess page
        window.location.href="index.html?expense_entry=Sucessfully recorded expense amount for: "+document.getElementById("Amount").value;
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        /* Removing this block to make the js work in Safari
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        */
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});
