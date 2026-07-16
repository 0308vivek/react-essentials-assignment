import React, { Component } from "react";

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", grade: "", errors: {} };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((state) => ({ [name]: value, errors: { ...state.errors, [name]: "" } }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, grade } = this.state;
    const errors = {};
    if (!name.trim()) errors.name = "Please enter a student name.";
    if (grade === "" || Number(grade) < 0 || Number(grade) > 100) {
      errors.grade = "Enter a grade from 0 to 100.";
    }
    if (Object.keys(errors).length) {
      this.setState({ errors });
      return;
    }
    this.props.onAddStudent(name, grade);
    this.setState({ name: "", grade: "", errors: {} });
  };

  render() {
    const { name, grade, errors } = this.state;
    return (
      <aside className="form-card">
        <div className="form-card__icon" aria-hidden="true">+</div>
        <p className="eyebrow">New record</p>
        <h2>Add a student</h2>
        <p className="form-card__description">Add a name and grade. The pass status is set automatically at 50%.</p>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="student-name">Student name</label>
          <input id="student-name" name="name" type="text" value={name} onChange={this.handleChange} placeholder="e.g. Maya Singh" aria-invalid={Boolean(errors.name)} />
          {errors.name && <small className="field-error">{errors.name}</small>}

          <label htmlFor="student-grade">Grade</label>
          <div className="grade-input">
            <input id="student-grade" name="grade" type="number" min="0" max="100" value={grade} onChange={this.handleChange} placeholder="0–100" aria-invalid={Boolean(errors.grade)} />
            <span>%</span>
          </div>
          {errors.grade && <small className="field-error">{errors.grade}</small>}
          <button className="button button--primary" type="submit">Add student <span aria-hidden="true">→</span></button>
        </form>
      </aside>
    );
  }
}

export default StudentForm;
