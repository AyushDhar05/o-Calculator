# Odin: Calculator

This is my final project for the Foundations section of The Odin Project. I had to build a fully functional calculator from scratch using HTML, CSS, and JavaScript.

## Features
- **Basic Math:** Addition, subtraction, multiplication, and division.
- **History Display:** I added a secondary display that shows your previous entries so you don't lose track of where you are in a calculation. 
- **Keyboard Support:** You can use your physical number pad and operator keys (`+`, `-`, `*`, `/`, `Enter`, `Backspace`) instead of just clicking.
- **Decimal Logic:** Correctly handles decimals and prevents you from entering more than one per number.
- **Snarky Error Handling:** Try dividing by zero if you want to get roasted.
- **Precision:** Results are rounded to fit the screen so long decimals don't break the layout.

## What I Learned
- How to handle "chaining" operations (e.g., `5 + 5 + 5` evaluating as you go).
- Using event delegation to handle a bunch of buttons efficiently.
- Mapping keyboard events to button clicks.
- Dealing with JavaScript's floating-point math quirks using precision methods.

## How to Run
Just open `index.html` in your browser!

---
*Built as part of the Odin Project curriculum.*
