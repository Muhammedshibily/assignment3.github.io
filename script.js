document.addEventListener('DOMContentLoaded', function() {
    const smoothieForm = document.getElementById('smoothie-form');
    const smoothieOutput = document.getElementById('smoothie-output');

    smoothieForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const flavor = document.querySelector('select[name="flavor"]').value;
        const size = document.querySelector('input[name="size"]:checked').value;
        const toppings = [];
        document.querySelectorAll('input[name="toppings"]:checked').forEach(function(checkbox) {
            toppings.push(checkbox.value);
        });

        const smoothie = new Smoothie(flavor, size, toppings);
        const orderDetails = smoothie.getOrderDetails();
        smoothieOutput.innerHTML = `
            <p>Thank you for your order!</p>
            <ul>
                <li><strong>Flavor:</strong> ${orderDetails.flavor}</li>
                <li><strong>Size:</strong> ${orderDetails.size}</li>
                <li><strong>Toppings:</strong> ${orderDetails.toppings.join(', ')}</li>
            </ul>
        `;
    });

    class Smoothie {
        constructor(flavor, size, toppings) {
            this.flavor = flavor;
            this.size = size;
            this.toppings = toppings;
        }

        getOrderDetails() {
            return {
                flavor: this.flavor,
                size: this.size,
                toppings: this.toppings
            };
        }
    }
});
