import { createProduct } from "../actions";

export default function ProductForm() {
    return (
        <form action={createProduct} className="space-y-5">
            <div className="form-control">
                <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium"
                >
                    Product Title
                </label>

                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="MacBook Pro"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <div className="form-control">
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
                    placeholder="1999"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <div className="form-control">
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
                    placeholder="50"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Create Product
            </button>
        </form>
    );
}