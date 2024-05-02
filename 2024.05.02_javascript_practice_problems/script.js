

function graduationYear(year){
  console.assert(typeof(year) == "number");
  switch(year % 4){
    case 0:
      return("blue");
    case 1:
      return("yellow");
    case 2:
      return("red");
    case 3:
      return("green");
  }
}


function convertTime(minutes){
  console.assert(typeof(minutes) == "number");
  hours = (minutes - (minutes % 60))/60;
  minutes %= 60;
  return(`${hours} hours and ${minutes} minutes`);
}


function triangle(base, height){
  console.assert(typeof(base) == "number");
  console.assert(typeof(height) == "number");
  return(0.5 * base * height);
}


function questionFour(a, b){
  console.assert(typeof(a) == "number");
  console.assert(typeof(b) == "number");
  return(a > 10 && b > 10 && a + b < 100);
}


function isValidTriangle(a, b, c){
  console.assert(typeof(a) == "number");
  console.assert(typeof(b) == "number");
  console.assert(typeof(c) == "number");
  return(a + b > c && a + c > b && b + c > a);
}


function questionSix(numberList){
  for(let i = numberList.length - 1; i >= 0; i--){
    numberList[i] = parseInt(numberList[i]);
  }
  numberList = numberList.sort();
  return(`Largest: ${numberList[numberList.length - 1]}, Smallest: ${numberList[0]}, Mean: ${numberList.reduce((a, b) => a + b, 0)/numberList.length}`);
}



