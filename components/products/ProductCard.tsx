import Link from "next/link";

type ProductCardProps = {
    id: number;
    title: string;
    price: number;
    stock: number;
};

export default function ProductCard({
    id,
    title,
    price,
    stock,
}: ProductCardProps) {
    return (
        <article className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p className="text-lg font-semibold">
                    ${price}
                </p>
                <Link href={`/dashboard/products/${id}`}>
                    View product
                </Link>

                {stock > 0 ? (
                    <span className="badge badge-success">
                        In stock: {stock}
                    </span>
                ) : (
                    <span className="badge badge-error">
                        Out of stock
                    </span>
                )}
            </div>
        </article>
    );
}