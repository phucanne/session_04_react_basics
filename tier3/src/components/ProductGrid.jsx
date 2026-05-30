import ProductCard from "./ProductCard";

function ProductGrid({ products, title }) {
    return (
        <div style={{ padding: "20px" }}>
            {title && <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h2>}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px"
            }}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        inStock={product.inStock}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;