import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditProductForm from "./EditProductForm";

type EditProductPageProps = {
    params: Promise<{
        productId: string;
    }>;
};

export default async function EditProductPage({
    params,
}: EditProductPageProps) {
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
                href={`/dashboard/products/${product.id}`}
                className="link link-hover text-sm text-base-content/60"
            >
                ← Back to product
            </Link>

            <div>
                <h1 className="text-3xl font-bold">
                    Edit product
                </h1>

                <p className="mt-2 text-base-content/60">
                    Update product information.
                </p>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-sm">
                <EditProductForm product={product} />
            </div>
        </section>
    );
}