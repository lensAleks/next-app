import StatCard from "@/components/dashboard/StatCard";

const dashboardStats = [
  {
    title: "Products",
    value: 128,
    description: "12 added this month",
  },
  {
    title: "Users",
    value: 846,
    description: "34 new users this month",
  },
  {
    title: "Orders",
    value: 392,
    description: "18 orders today",
  },
  {
    title: "Low stock",
    value: 7,
    description: "Products need attention",
  },
];

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          Dashboard overview
        </h2>

        <p className="mt-2 text-base-content/60">
          Monitor products, users, orders and inventory.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
}