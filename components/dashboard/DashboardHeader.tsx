export default function DashboardHeader() {
    return (
        <header className="navbar border-b border-base-300 bg-base-100 px-6">
            <div className="flex-1">
                <div>
                    <p className="text-sm text-base-content/60">
                        Administration
                    </p>

                    <h1 className="text-xl font-semibold">
                        Marketplace Dashboard
                    </h1>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="text-right">
                    <p className="text-sm font-semibold">Anna</p>
                    <p className="text-xs text-base-content/60">Administrator</p>
                </div>

                <button
                    type="button"
                    className="btn btn-circle border border-primary/20 bg-primary text-primary-content shadow-sm hover:bg-primary/90"
                    aria-label="Open profile menu"
                >
                    <span className="text-base font-bold">A</span>
                </button>
            </div>
        </header>
    );
}