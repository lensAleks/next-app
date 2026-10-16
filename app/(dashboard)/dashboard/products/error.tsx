"use client";

export default function ProductsError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="alert alert-error">
            <div>
                <h2 className="font-bold">
                    Failed to load products
                </h2>

                <p>{error.message}</p>

                <button
                    type="button"
                    className="btn btn-sm"
                    onClick={reset}
                >
                    Try again
                </button>
            </div>
        </div>
    );
}