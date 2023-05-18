const getSunday = () => {
  const today = new Date();
  const day = today.getDay();
  const nextSunday = 7 - day;
  const diff = today.getDate() + nextSunday;
  return new Date(today.setDate(diff)).toISOString().split("T")[0];
};

export { getSunday };
