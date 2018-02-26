window.onload = function calculateAge(){
  var today = new Date();
  var birthday = new Date(1998, 4-1, 9);
  var difference = Math.abs(today.valueOf() - birthday.valueOf());
  var ageInDays = Math.floor(difference / (1000 * 3600 * 24));
  var remainingDays = Math.floor(difference);

  // Correcting the days so that every year would have 365 days.
  for (var i = 1998; i < today.getFullYear(); i++) {
    if (i%4 == 0) {
      ageInDays--;
    }
  }
  // 2100 is not a leap year
  if (today.getFullYear() >= 2100) {
    ageInDays++;
  }
  var ageInYears = Math.floor(ageInDays / 365);
  if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())){
    document.getElementById('age').innerHTML = "I am currently " + ageInYears + " years old and today is my BIRTHDAY!";
  } else if (365 - ageInDays%365 == 1) {
    document.getElementById('age').innerHTML = "I am currently " + ageInYears + " years old, but will be " + (ageInYears+1) + " tomorrow!";
  } else {
    document.getElementById('age').innerHTML = "I am currently " + ageInYears + " years old, but will be " + (ageInYears+1) + " in only " + (365 - ageInDays%365) + " days.";
  }

  var x = window.matchMedia("(max-width: 600px)");
  changeActive(x);
  x.addListener(changeActive);
};
