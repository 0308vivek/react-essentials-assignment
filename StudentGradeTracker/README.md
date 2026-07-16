# Student Grade Tracker

A responsive student-management dashboard built in the Create React App format. It demonstrates React **class components**, local state, controlled forms, props, event handling, and lifecycle methods.

## Features

- Add students with name and grade validation (0–100)
- Update a student's grade and automatically calculate pass/fail at 50%
- Toggle pass/fail status and delete a student
- Filter by all, passed, or failed students
- Sort grades from highest or lowest
- Responsive dashboard for desktop, tablet, and mobile
- Lifecycle console logs for mount, updates, and cleanup

## Run locally

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

## Structure

```text
src/
  components/
    StudentForm.jsx
    StudentList.jsx
    StudentItem.jsx
  App.js
  App.css
  index.js
  index.css
public/
  index.html
```

## Lifecycle methods

- `componentDidMount`: loads sample student records.
- `componentDidUpdate`: logs when the student list changes.
- `componentWillUnmount`: logs cleanup when the app is removed.
