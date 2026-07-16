import React, { Component } from "react";

class StudentItem extends Component {
  constructor(props) {
    super(props);
    this.state = { grade: String(props.student.grade), error: "" };
  }

  handleGradeChange = (event) => this.setState({ grade: event.target.value, error: "" });

  handleUpdate = () => {
    const { grade } = this.state;
    if (grade === "" || Number(grade) < 0 || Number(grade) > 100) {
      this.setState({ error: "Use a grade from 0 to 100." });
      return;
    }
    this.props.onUpdateGrade(this.props.student.id, grade);
  };

  render() {
    const { student, onToggleStatus, onDeleteStudent } = this.props;
    const { grade, error } = this.state;
    const initials = student.name.split(" ").map((word) => word[0]).slice(0, 2).join("").toUpperCase();
    return (
      <article className={`student-card ${student.passed ? "student-card--passed" : "student-card--failed"}`}>
        <div className="student-card__top">
          <div className="avatar" aria-hidden="true">{initials}</div>
          <div><h3>{student.name}</h3><span className={`status ${student.passed ? "status--passed" : "status--failed"}`}>{student.passed ? "● Passed" : "● Failed"}</span></div>
          <button className="icon-button" type="button" aria-label={`Delete ${student.name}`} onClick={() => onDeleteStudent(student.id)}>×</button>
        </div>
        <div className="grade-display"><span>Current grade</span><strong>{student.grade}<small>%</small></strong></div>
        <div className="update-row">
          <label htmlFor={`grade-${student.id}`}>Update grade</label>
          <div><input id={`grade-${student.id}`} type="number" min="0" max="100" value={grade} onChange={this.handleGradeChange} aria-invalid={Boolean(error)} /><button className="button button--secondary" type="button" onClick={this.handleUpdate}>Update</button></div>
          {error && <small className="field-error">{error}</small>}
        </div>
        <button className="toggle-button" type="button" onClick={() => onToggleStatus(student.id)}>↻ Mark as {student.passed ? "failed" : "passed"}</button>
      </article>
    );
  }
}

export default StudentItem;
