export function getExperience() {
  const startDate = new Date("2016-01-01");
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (today.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    text: `${years} Years ${months} Months`,
    short: `${years}+`,
  };
}