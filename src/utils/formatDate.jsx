export const formatDate = (date) => {
  const d = new Date(date);
  return `${d
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-")} At ${d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}`; 
};
