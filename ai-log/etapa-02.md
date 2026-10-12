# Stage 2: AI log

## Tools
- ChatGPT

## Conversations
- [ChatGPT conversation link] (JavaScript array methods, immutability, validation and testing)

## Key requests

### 1. JavaScript array methods

- Asked: Can you explain how map(), filter() and reduce() work and how they are used in my Art Gallery project?
- Got: ChatGPT explained that map() creates a new array by transforming elements, filter() selects elements based on a condition, and reduce() calculates a single value from an array.
- Changed or rejected: I used these methods to list artwork titles, count available artworks, search by title and calculate the next ID.

### 2. Immutability

- Asked: Why should I return a new array when adding, modifying or deleting an artwork instead of changing the original array?
- Got: ChatGPT explained that immutability keeps the original data unchanged and is important for updating data correctly in React.
- Changed or rejected: I kept the original array unchanged by using the spread operator, map() and filter() in my functions.

### 3. Validation and testing

- Asked: How can I check if my JavaScript functions work correctly in the browser console and if invalid artwork data is rejected?
- Got: ChatGPT explained how to open the browser console and check the results displayed by console.log().
- Changed or rejected: I tested the functions in the browser console and verified that empty titles and invalid artwork types are rejected.

## What I learned / what did not work

I learned how to use JavaScript array methods to manage artwork data without modifying the original array. I also understood why immutability is important and how to validate user input. Testing the functions in the browser console helped me understand how the code works and identify possible errors.