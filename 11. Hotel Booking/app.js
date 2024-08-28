const checkInDate = document.getElementById("check-in");
const checkOutDate = document.getElementById("check-out");

const date = new Date();
var moment = require("moment");
const today = moment().format("D MMMM, YYYY");

checkInDate.placeholder = today;
