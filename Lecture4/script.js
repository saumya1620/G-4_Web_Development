async function getData(){
    try{
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok) throw new Error('Cannot fetch Products');
        const data = await response.json();
        const list = document.getElementById("products");
        list.innerHTML = ""
        data.products.forEach(product => {
            const li = document.createElement("li");
          li.textContent = `${product.title} - Rs${product.price}- ${product.category} - ${product.rating}`;
          list.appendChild(li);
        });
    }
    catch(error){
        console.log("Error: ", error.message)
    }
}

getData();