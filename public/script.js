 let age = prompt("Enter your current age ", "1")
 let maxAge = prompt("Enter the max age you think you can live until ", "1")
 let numPerDay = prompt("Enter how many times you use/consume this item per day ", "1")
 if(age >= 1 && maxAge >= 1 && numPerDay >= 1) {
    totalRequired = (numPerDay*365)*(maxAge-age);
    document.write("You will need " + totalRequired + " to last you until the ripe old age of " + maxAge);
 }
 else {
    alert("Number cannot be less than 1, run the code again")
    console.log("Value error")
 }
