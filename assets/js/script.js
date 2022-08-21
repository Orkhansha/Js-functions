// Verilmish n-ededinin 3-e ve 7-ye bolunub-bolunmemesini tapmaq.

//Divided(42);

function Divided(n) {
  if (n % 21 == 0 && n!=0) {
    console.log("Divided");
  } else {
    console.log("Not divided");
  }
}

// Faktorialin hesablanmasi.

//factMatch(6)

function factMatch(n) {
  var fact = 1;
  var result = n;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}

// Arraydaki cut ededlerin kvadratlarinin cemini tapmaq.

// var array = [1,2,3,4,5,6,7,8]
// sumEven(array)

function sumEven(array) {
    let sum = 0;
  
    for (let i = 0; i <= array.length; i++) {
      if (array[i] % 2 == 0) {
        sum = sum + array[i] * array[i];
      }
    }
    console.log(sum);
  }

// Email detector.


// let mail="cavid@code.edu.az";
// let password=12345

// if(Detector(mail, password))
// {
//     console.log("Girish olundu");
// }
// else
// {
//     console.log("Mail ve ya password yalnishdir");
// }

function Detector(mail, password) {
    if (mail == "cavid@code.edu.az" && password == 12345) {
      return true;
    } else {
      return false;
    }
  }
  

// Arraydaki tek ededlerin cemini tapmaq.

// var array = [1,2,3,4,5,6,7]
// sumOdd(array)

function sumOdd(array) {
  let sum = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 == 1) {
      sum = sum + array[i];
    }
  }
  console.log(sum);
}


// Arraydaki cut ededlerin sayini tapmaq.

// var array = [1,2,3,4,5,6,7,8,9,10,13,14,16,18]
// countEven(array);

function countEven(array) {
  let count = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}

