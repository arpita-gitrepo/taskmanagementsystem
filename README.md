Project Setup

1. Clone the repository.


2. Run npm install to install the dependencies.


3. Use npm start to run the project on http://localhost:3000/.



Features Implemented

Task List Display

A simple list is used to display tasks with their titles and descriptions.

Added functionality to add and delete tasks.


Task Form

A form with fields for title and description is available for adding new tasks.

Basic validation ensures that both fields are filled out before adding the task.


State Management

State management is handled using React's useState hook to store and update tasks.


Styling

Basic styling has been applied using Tailwind CSS.


Enhanced Task Properties

Each task can now include a due date and a priority (Low, Medium, High).

The functionality to edit existing tasks has been added.


Advanced Validation

Task titles must be unique.

The due date validation ensures the task is set for today or a future date.


Task Interactions

Users can mark tasks as Completed/Done, with a visual distinction for completed tasks.


Responsive Design

The application is fully responsive and works on both desktop and mobile devices.


Advanced Features

Implemented an accordion UI to group tasks under collapsible sections.


UI/UX Enhancements

A dark mode toggle has been added with a smooth transition between light and dark modes.


Data Persistence

Tasks are stored in localStorage, ensuring persistence across page reloads.


Error Handling

Error boundaries have been implemented to catch and display user-friendly error messages.
