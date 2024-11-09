/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

/**
 * Upon clicking the button, it removes the restaurant on the frontend and backend. 
 * It would send a DELETE request to the api to remove the specific restaurant
 * This deletiion would persist even when reloading the page.
 */
function deleteRestaurantCard() {

    document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.grid-container');
        const buttons = container.getElementsByClassName('minus');
        for (let button of buttons) {
            button.addEventListener("click",(event) => {
                let restaurantId = button.id.split("-")[1];
                console.log(restaurantId);
                fetch(`/api/restaurants/${restaurantId}`,
                    {
                        method: 'DELETE'
                    }
                ).then(response =>{
                    return response.json();
                }).then(data => {
                    window.location.reload();
                }).catch(error => {
                    console.error('error',error);
                })
            });
        }
    });

}

deleteRestaurantCard();