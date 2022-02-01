export default function switchDate(data) {
  const arrayData = data.replace("-", " ").replace("-", " ").split(" ");

  switch (arrayData[1]) {
    case "01":
      arrayData[1] = "January";
      break;

    case "02":
      arrayData[1] = "February";
      break;

    case "03":
      arrayData[1] = "March";
      break;

    case "04":
      arrayData[1] = "April";
      break;

    case "05":
      arrayData[1] = "May";
      break;

    case "06":
      arrayData[1] = "June";
      break;

    case "07":
      arrayData[1] = "July";
      break;

    case "08":
      arrayData[1] = "August";
      break;

    case "09":
      arrayData[1] = "September";
      break;

    case "10":
      arrayData[1] = "October";
      break;

    case "11":
      arrayData[1] = "November";
      break;

    case "12":
      arrayData[1] = "December";
      break;
  }

  const dataTratada = arrayData[2] + " " + arrayData[1] + " " + arrayData[0];

  return dataTratada;
}
