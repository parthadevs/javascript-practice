let text = "javascript"
console.log(text.slice(4,1));
console.log(text.substring(4,1));

// output : empty and ava


/*
Explanation:
Although both methods are used to cut strings, 
the way they handle their arguments is different:

slice(start, end): Here, if start (4) is greater than end (1), slice()
does nothing, directly returning an empty string ("").

substring(start, end): This method is quite clever. 
If start > end, it automatically swaps the two arguments! 
That is, substring(4, 1) becomes substring(1, 4) in the background. 
And so it cuts the part from index 1 to index 4, i.e. "ava", and displays it.

*/