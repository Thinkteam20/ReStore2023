import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./product";

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products") //
            .then((response) => response.json()) //
            .then((data) => setProducts(data)); //
    }, []);

    function addProduct() {
        setProducts((prevState) => [
            ...prevState,
            {
                id: prevState.length + 101,
                name: "product" + (prevState.length + 1),
                price: prevState.length * 100 + 100,
                brand: "some brand",
                description: "some des",
                pictureUrl: "http://picsum/200",

            },
        ]);
    }
    return (
        <div className='App'>
            <h1>Re-Store</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
            <button onClick={() => addProduct()}>add</button>
        </div>
    );
}

export default App;
