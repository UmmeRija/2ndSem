let num1, num2;

function printValue(value) {
  console.log(`Clicked button value: ${value}`);
  if (!num1) {
    num1 = parseInt(value);
  } else if (!num2) {
    num2 = parseInt(value);
  }
}

function myFunction() {
  if (num1 && num2) {
    let result = num1 + num2;
    console.log(`Sum: ${result}`);
  } else {
    console.log('Please click on both buttons first!');
  }
}

    
