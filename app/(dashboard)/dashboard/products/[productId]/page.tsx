import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type ProductPageProps = {
    params: Promise<{
        productId: string;
    }>;
};

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { productId } = await params;

    const id = Number(productId);

    if (!Number.isInteger(id)) {
        notFound();
    }

    const product = await prisma.product.findUnique({
        where: {
            id,
        },
    });

    if (!product) {
        notFound();
    }

    return (
        <section className="mx-auto max-w-3xl space-y-6">
            <Link
                href="/dashboard/products"
                className="link link-hover text-sm text-base-content/60"
            >
                ← Back to products
            </Link>

            <div className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {product.title}
                            </h1>

                            <p className="mt-2 text-base-content/60">
                                Product ID: {product.id}
                            </p>
                        </div>

                        {product.stock > 0 ? (
                            <span className="badge badge-success">
                                In stock
                            </span>
                        ) : (
                            <span className="badge badge-error">
                                Out of stock
                            </span>
                        )}
                    </div>

                    <div className="divider" />

                    <div className="space-y-3">
                        <div>
                            <p className="text-sm text-base-content/60">
                                Price
                            </p>

                            <p className="text-2xl font-semibold">
                                ${product.price}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-base-content/60">
                                Stock
                            </p>

                            <p className="font-medium">
                                {product.stock} units
                            </p>
                        </div>
                    </div>
                    <Link
                        href={`/dashboard/products/${product.id}/edit`}
                        className="btn btn-primary"
                    >
                        Edit product
                    </Link>
                </div>
            </div>
        </section>
    );
}