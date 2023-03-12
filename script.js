var detailsForm = document.querySelector("#destination_details_form");

detailsForm.addEventListener("submit", handleFormSubmit);

// When someone submits the form, this function will run.
function handleFormSubmit(event){
    event.preventDefault();

    // Read out the inputs
    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDesc = event.target.elements["description"].value;

    // Clear all the fields
    for(var i=0; i<detailsForm.length; i++){
        detailsForm.elements[i].value = "";
    }

    // Run a function to create a new card


    // Change the text in the heading
    var wishListContainer = document.getElementById("destination_container");

    if(wishListContainer.children.length===0){
        document.getElementById("title").innerHTML = "My Wish List";
    }

}

function createDestinationCard(name, location, photoURL, description){
    var card = document.createElement(div);
    card.className = "card";

    var img = document.createElement("img");
    img.setAttribute("alt", name);
    
    var constantPhotoUrl = "images/signpost.jpg";

    if(photoURL.length === 0){
        img.setAttribute("src", constantPhotoUrl);
    }
    else {
        img.setAttribute("src", photoURL);
    }
}