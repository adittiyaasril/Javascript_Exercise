function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.
  if (year % 4 !== 0 || (year === 100 && year % 400 !== 0)) {
    console.log("Not leap year");
  } else {
    console.log("Leap year");
  }

  /**************Don't change the code below****************/
}
isLeap(1989);