// 1: Make a function named generate8CharacterPass.
function generate8CharacterPass() {
  
  // 2: Make an empty string variable where the password will be stored.
  let password = "";

  // 3: Make a string that has a mix of alphabets, numbers, and special characters.
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  // 4: Use a for loop that runs 8 times.
  for (let i = 0; i < 8; i++) {
    
    // 5: In each iteration, generate a random index using Math.random().
    // We use Math.floor() to get a whole number.
    let randomIndex = Math.floor(Math.random() * chars.length);

    // 6: Add the randomly chosen character to the password variable.
    password += chars[randomIndex];
  }

  // 7: After the loop is complete, print the final password in the console.
  console.log(password);
}

// Call the function to run it and generate a password
generate8CharacterPass();