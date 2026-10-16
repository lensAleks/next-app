import ProductCard from "./ProductCard";

type Product = {
    id: number;
    title: string;
    price: number;
    stock: number;
};

type ProductListProps = {
    products: Product[];
};

export default function ProductList({
    products,
}: ProductListProps) {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    stock={product.stock}
                />
            ))}
        </div>
    );
}