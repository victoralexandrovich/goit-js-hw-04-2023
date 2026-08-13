function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(20)); // повинно вивести 'You are an adult'
console.log(checkAge(8)); // повинно вивести 'You are a minor'
console.log(checkAge(14)); // повинно вивести 'You are a minor'
console.log(checkAge(38)); // повинно вивести 'You are an adult'
