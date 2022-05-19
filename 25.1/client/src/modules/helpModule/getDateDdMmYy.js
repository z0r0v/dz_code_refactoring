function GetTodayDate() {
  let tdate = new Date();
  let dd = tdate.getDate(); //yields day
  let MM = tdate.getMonth(); //yields month
  let yyyy = tdate.getFullYear(); //yields year

  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (MM < 10) {
    MM = `0${MM}`;
  }
  if (yyyy < 10) {
    yyyy = `0${yyyy}`;
  }

  var currentDate = `${dd}.${MM}.${yyyy}`;
  return currentDate;
}

export { GetTodayDate };
