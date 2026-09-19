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

export function getYearsOfExperience(): number {
  const start = new Date(2021, 7, 1); // agosto 2021 (mes 0-indexed)
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years--;
  }
  return years;
}
