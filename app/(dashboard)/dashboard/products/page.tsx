import Link from "next/link";
import ProductList from "@/components/products/ProductList";
import { prisma } from "@/lib/prisma";


const products1 = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 89.99,
    stock: 12,
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 119.99,
    stock: 5,
  },
  {
    id: 3,
    title: "USB-C Hub",
    price: 49.99,
    stock: 0,
  },
];


export default async function ProductsPage() {

  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Products
          </h2>

          <p className="mt-2 text-base-content/60">
            Manage your marketplace products.
          </p>
        </div>

        <Link
          href="/dashboard/products/new"
          className="btn btn-primary"
        >
          Add product
        </Link>
      </div>

      <ProductList products={products} />
    </section>
  );
}