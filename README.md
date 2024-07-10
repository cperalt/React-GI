# React Guided Inquiry 1

My first React App

The react application was initialized using Vit.

The primary code for the challenge is located in the App.jsx file under src.

For this guided inquiry the task was the following: 


VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.


EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object



MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)


HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state.
(Optional: add styling to space out each person’s info)

Thoughts: I would refactor my code to to make readability better. Currenlty all of the components are inside of the main App functional component as per the instructions. I would remove the class compenents each into their own separate file and import it into the main App.jsx file. In addition I would prefer to make the class components into functional components.

> [!NOTE]
> To run start the application type the following command `npm run dev`

