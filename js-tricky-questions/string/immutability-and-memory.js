let secureWord = "Secret";

secureWord = secureWord + " Password";

console.log(secureWord);

/*

Explanation:
Since strings are immutable, the original "Secret" string in memory never changes. 
When you do secureWord + " Password", 
a new string named "Secret Password" is created in a completely new location in memory, 
and the secureWord variable then points to the new address.

Performance Impact:
If you keep adding strings inside a large loop (say 10,000 times), 
new strings will be created in memory each time, and old strings will be collected as garbage. 
This puts pressure on memory and slows down the application (the garbage collector has to work extra).

*/