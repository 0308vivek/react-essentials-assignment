# React Essentials Assignment - Task Manager Application

## Overview

This project was built as part of my React learning journey. The goal was to understand advanced React state management techniques by building a Task Manager Application using React Context API and useReducer. The application demonstrates how to manage global state efficiently while maintaining a scalable and organized component structure.

## Live Demo

**Deployment Link:** https://task-manager-vy9r.onrender.com

## Features

### A1: Global State Management with Context API

* Created a dedicated Task Context for managing application state.
* Wrapped the application with a Context Provider.
* Enabled global access to task data without prop drilling.

### A2: State Management Using useReducer

Implemented task management functionality using the useReducer hook.

Supported actions include:

* Add Task
* Edit Task
* Delete Task
* Toggle Task Completion
* Clear All Tasks

### A3: Component-Based Architecture

Structured the application into reusable React components:

* TaskInput
* TaskList
* TaskItem
* TaskSummary

Each component is responsible for a specific part of the application, improving maintainability and scalability.

### A4: Interactive Task Management

* Create new tasks dynamically.
* Edit existing task names.
* Mark tasks as complete or incomplete using checkboxes.
* Delete individual tasks.
* Clear all tasks with a single action.

### A5: Responsive and Modern UI

* Clean card-based layout.
* Hover effects and smooth transitions.
* Visual indication for completed tasks.
* Responsive design for desktop, tablet, and mobile devices.

## Technologies Used

* React.js
* JavaScript (ES6+)
* JSX
* CSS3
* React Hooks (`useReducer`)
* React Context API

## Learning Outcomes

Through this project, I gained hands-on experience with:

* React Context API
* useReducer Hook
* Global State Management
* Reducer Pattern
* Component-Based Architecture
* State Updates and Action Dispatching
* Conditional Rendering
* Event Handling
* Responsive UI Design
* Modern CSS Styling

## Project Structure

```text
task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   ├── TaskItem.js
│   │   └── TaskSummary.js
│   │
│   ├── context/
│   │   └── TaskContext.js
│   │
│   ├── reducer/
│   │   └── taskReducer.js
│   │
│   ├── styles/
│   │   └── taskManager.css
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```
