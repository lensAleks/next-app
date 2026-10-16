type StatCardProps = {
  title: string;
  value: number;
  description: string;
};

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <article className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-2">
        <p className="text-sm font-medium text-base-content/60">
          {title}
        </p>

        <strong className="text-3xl font-bold">
          {value}
        </strong>

        <p className="text-sm text-base-content/60">
          {description}
        </p>
      </div>
    </article>
  );
}