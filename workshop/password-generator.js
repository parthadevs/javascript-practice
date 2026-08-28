function generatePassword(length){
  let password = "";
  const rendomTest = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

  for(let i = 0;i< length; i++){
     password += rendomTest[Math.floor(Math.random() * rendomTest.length)]
  }

  return password


}

const password = generatePassword(10)

console.log(`Generated password: ${password}`)