import Link from "next/link";
import ProductForm from "./ProductForm";

export default function NewProductPage() {
    return (
        <section className="mx-auto max-w-3xl space-y-6">
            <div>
                <Link
                    href="/dashboard/products"
                    className="link link-hover text-sm text-base-content/60"
                >
                    ← Back to products
                </Link>

                <h1 className="mt-3 text-3xl font-bold">Add product</h1>

                <p className="mt-2 text-base-content/60">
                    Create a new marketplace product.
                </p>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body">
                    <ProductForm />
                </div>
            </div>
        </section>
    );
}