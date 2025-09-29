export const months = [
      "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const priorities = ['high', 'medium', 'low'];

export const priorityColors = {
  high: '#f87171',
  medium: 'rgb(235, 220, 88)',
  low: 'rgb(80, 205, 178)',
};

export const formatDateToYMD = (dateInput) => {
  if (typeof dateInput === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(dateInput)) {
    dateInput += ":00";
  }

  const date = new Date(dateInput);

  if (isNaN(date)) {
    console.warn("Invalid date input:", dateInput);
    return null;
  }

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};




