export const formatDate = (date) => {
  const d = new Date(date);
  return `${d
    .toLocaleDateString("en-US")
    .replace(/\//g, "-")} at ${d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}`;
};
