export default function ProductsLoading() {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="skeleton h-40 w-full rounded-xl"
                />
            ))}
        </div>
    );
}