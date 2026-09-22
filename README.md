🎯 NumGuess — Number Guessing Game

An interactive, responsive web application built with vanilla HTML5, CSS3, and JavaScript. Players try to guess a randomly generated secret number between 1 and 100, receiving instant feedback on each attempt until they find the correct number.

🌟 Key Features

Dynamic Game Logic: Generates a new secret number (1–100) every time the game starts or resets.

Instant Visual Feedback: Guides the player with helpful prompts ("Too High", "Too Low", or "Correct!").

Robust Input Validation: Ensures inputs are valid numbers within range using conditional logic (if / else).

Seamless Reset: Replay instantly with the "Play Again" button without needing to refresh the page.

Modern & Clean UI: Simple, centered card layout designed with CSS Flexbox for desktop and mobile responsiveness.

🛠️ Concepts & Technologies Used

HTML5: Webpage structure, input fields, and UI controls.

CSS3: Flexbox centering, styling, button hover effects, and visibility toggle classes.

JavaScript (ES6):

addEventListener: Captures click events for guessing and resetting.

parseInt: Converts user input from text strings into integers for mathematical comparison.

if / else if / else: Executes conditional game logic and input safeguards.

Math.random() & Math.floor(): Generates random integers dynamically.

DOM Manipulation: Updates element text and inline styles dynamically based on game outcome.

🧮 JavaScript Core Concepts Explored

1. Math.ceil()

Math.ceil() is a built-in JavaScript method that always rounds a number up to the nearest whole integer, regardless of the decimal value.

Math.ceil(0.1);  // Returns: 1
Math.ceil(4.2);  // Returns: 5
Math.ceil(7.9);  // Returns: 8
Math.ceil(-1.2); // Returns: -1


2. Equality Operators: Strict (===) vs. Loose (==)

JavaScript provides two primary ways to compare values:

Strict Equality (===)

Checks for both value equality and data type match without performing type coercion.

5 === 5;      // true (same value, same type: number)
5 === "5";    // false (different types: number vs string)
true === 1;   // false


Loose Equality (==)

Checks for value equality after performing implicit type coercion (converting types automatically before comparing).

5 == "5";     // true (string "5" is converted to number 5)
true == 1;    // true
null == undefined; // true


Best Practice: Always use strict equality (===) in your projects to prevent unexpected bugs caused by automatic type conversions!

📂 Project Structure

├── index.html   # Main HTML page with game layout
├── style.css    # Clean, modern styling and responsive layout
└── script.js    # JavaScript logic, event listeners, and parsing


💻 How to Execute & Run the Application

Because this project is built using standard front-end web technologies (Vanilla JavaScript, HTML, CSS), no installation or build steps (like npm or node) are required.

Option 1: Direct File Execution (Easiest)

Download/Clone the repository:

git clone https://github.com/your-username/numguess.git


Open the project folder on your computer.

Double-click index.html to launch the game directly in your default web browser (Chrome, Firefox, Safari, Edge, etc.).

Option 2: Running via VS Code Live Server (Recommended for Development)

Open Visual Studio Code.

Open the project folder in VS Code (File > Open Folder...).

Install the Live Server extension (by Ritwick Dey) from the Extensions marketplace (Ctrl+Shift+X or Cmd+Shift+X).

Right-click on index.html in the file explorer and select "Open with Live Server".

The application will launch automatically at http://127.0.0.1:5500.

Option 3: Command Line Execution

macOS:

open index.html


Windows (Command Prompt / PowerShell):

start index.html


Linux:

xdg-open index.html


🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the project repository.

📜 License

This project is open-source and available under the MIT License.
