export function formatDate(_date: string): string {
  if (!_date) return "";

  const date = new Date(_date);
  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return formatted;
}
