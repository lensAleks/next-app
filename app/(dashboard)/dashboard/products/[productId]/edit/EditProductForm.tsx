import { updateProduct } from "../../actions";

type EditProductFormProps = {
    product: {
        id: number;
        title: string;
        price: number;
        stock: number;
    };
};

export default function EditProductForm({
    product,
}: EditProductFormProps) {
    const updateProductWithId =
        updateProduct.bind(null, product.id);

    return (
        <form className="space-y-5" action={updateProductWithId}>
            <div>
                <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium"
                >
                    Product title
                </label>

                <input
                    id="title"
                    name="title"
                    type="text"
                    defaultValue={product.title}
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="price"
                    className="mb-2 block text-sm font-medium"
                >
                    Price
                </label>

                <input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    defaultValue={product.price}
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="stock"
                    className="mb-2 block text-sm font-medium"
                >
                    Stock
                </label>

                <input
                    id="stock"
                    name="stock"
                    type="number"
                    defaultValue={product.stock}
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Save changes
            </button>
        </form>
    );
}