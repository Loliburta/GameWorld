export const readableDate = (date: string | undefined | null) => {
  if (!date) {
    return "";
  }
  const months: { [key: string]: string } = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };
  let [year, month, day] = date.split("-");
  day = day[0] === "0" ? day[1] : day;
  month = months[month];
  return `${day} ${month}, ${year}`;
};
