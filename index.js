function productCounter(action) {
    const valueElement = document.getElementById("product-value")

    if (action == "minus") {
        if(valueElement.innerHTML <='1') {
            alert('Product quantity cannot be less than 1')
            return
        }
        --valueElement.innerHTML 
    }
    else if (action == "plus") {
        if(valueElement.innerHTML == '10') {
            alert('Product quantity cannot be greater than 10')
            return
        }
        ++valueElement.innerHTML
    }
}