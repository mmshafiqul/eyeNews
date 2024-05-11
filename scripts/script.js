const d = new Date();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

const formattedDate = d.toLocaleDateString(undefined, options);
document.getElementById("day").innerHTML = formattedDate;