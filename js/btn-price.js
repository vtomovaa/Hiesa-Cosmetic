    // Function to handle the click event for the order section
    function handleOrderClick(event) {
        const parentSection = event.currentTarget.closest('.order');
        parentSection.querySelectorAll('.quant-cont').forEach(innerItem => {
            innerItem.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
        const price = event.currentTarget.getAttribute('data-price');
        parentSection.querySelector('#order-price').innerText = '€' + price;
    }

    // Function to handle the click event for the product section
    function handleProductClick(event) {
        const parentSection = event.currentTarget.closest('.product');
        parentSection.querySelectorAll('.quant-cont').forEach(innerItem => {
            innerItem.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
        const price = event.currentTarget.getAttribute('data-price');
        parentSection.querySelector('#price').innerText = '€' + price;
    }

    // Add event listeners to the order section
    document.querySelectorAll('.order .quant-cont').forEach(item => {
        item.addEventListener('click', handleOrderClick);
    });

    // Add event listeners to the product section
    document.querySelectorAll('.product .quant-cont').forEach(item => {
        item.addEventListener('click', handleProductClick);
    });