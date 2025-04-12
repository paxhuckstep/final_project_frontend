# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
///////////////////////////////////////////////////////////////////////////////////////////////

This is my final project in TripleTen's software engineering program.
For this final project, they gave us the freedom to do whatever we want. Before I got to the final project I watched a video of a mock react interview where the challenge was to make a functional and interactive wordle type game. I thought this was a fun challenge and decided to take on the challenge myself, and I ended up using that to also be my final project for the TripleTen program.

I don't remember the solution in the video I watched, but I do remember that it (like actual wordle) always worked with only 5 letter words, from the start I wanted mine to work regardless of the word-length. This was easy enough.

In the video, they only had enough functionality to where it could correctly test for green letters (correct letter in correct position), however the yellow testing (correct letter wrong position) was a little imperfect because it would keep showing yellow for a letter regardless if the letter was already guessed. For example, if the correct word was "slide" and the user guessed "sssss", you would get a response of one green s, followed by four yellow s. Which is not how the real wordle works. In the video they didn't get to that part. Nor did they have much of an idea as to how to impliment such a feature. This unique challenge is what really attracted me to making this project.

Initially, I created a version that worked exactly the same as in the video (a little extra dynamic because it adjusts to the length of the "correctWord" being guessed), however the next day I tackled the challenge of going beyond and figuring out how to limit the number of times a letter appears yellow depending with the number of times the letter appears in the correct word. Just like real wordle. Eventually, I figured it out in the function "testAnswer" and I am very happy with the solution I came up with, in my opinion it's definitely the coolest 47 lines of code in the project. 

The real magic inside "testAnswer" is the "possibleYellowCount" array that is initially populated with the maximum number of times each letter can be yellow, and then every time a letter is set to yellow the yellow count of that letter decreases by one. There's some extra logic around it, like "correctWordGreenless" takes all of the letters that are going to return green out of the "correctWord" so that "possibleYellowCount" isn't getting any letters that are green also incorrectly popping up as yellow somewhere else. I cleaned up and refactored the code to make it nice and pretty, I am very happy with where it is now.

Future plans include adding other catagories other than just pokemon, and implementing functional leaderboards. Those will have to wait because right now, I am working on the backend so that user's can register and login and all that fun stuff.

deployed at: 
https://paxwordle.netlify.app/