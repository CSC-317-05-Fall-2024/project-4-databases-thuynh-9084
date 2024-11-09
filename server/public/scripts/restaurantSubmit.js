/**
 *  This takes the user form submission. It takes all of the inputted information from the form 
 *  and makes a request of the api to be processed on both the frontend and backend
 *  The submission will be added upon opening the list of restaurants
 */

const handleSubmit = async (event) => {
    event.preventDefault(); 

    // Extract fields from the form, and
    // send a request to create a new restaurant
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const photo = document.getElementById('photo').value;

    // Render the image link after the submission from restaurant form
    const viewImage = document.getElementById('viewImage');
    viewImage.src = photo;

    fetch(`/api/restaurants`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,phone,address,photo})
        }
    ).then(response =>{
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        window.location.href = `/restaurant_form`;
    }).catch(error => {
        console.error('error',error);
    });

}

// Adds a listener on the DOM. Waiting for the user form submission
document.addEventListener('DOMContentLoaded', () => {
 
    // Add event listener to the form for submit events
    const form = document.querySelector('form');
    form.addEventListener('submit',handleSubmit);

});
