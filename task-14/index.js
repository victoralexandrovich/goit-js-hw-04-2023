// Оголошена функція isValidPassword(password)
// У виразі перевірки паролів використаний оператор ===
// Змінна SAVED_PASSWORD містить попередньо збережений пароль

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  let isMatch = password === SAVED_PASSWORD;
  return isMatch;
}

// Виклик isValidPassword("mangodab3st") повертає false
// Виклик isValidPassword("kiwirul3z") повертає false
