import React, { Component } from "react";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  render() {
    const { students, onUpdateGrade, onToggleStatus, onDeleteStudent } = this.props;
    if (!students.length) {
      return <div className="empty-state"><span aria-hidden="true">⌁</span><h3>No students found</h3><p>Try another filter or add a new student to get started.</p></div>;
    }
    return <div className="student-grid">{students.map((student) => <StudentItem key={student.id} student={student} onUpdateGrade={onUpdateGrade} onToggleStatus={onToggleStatus} onDeleteStudent={onDeleteStudent} />)}</div>;
  }
}

export default StudentList;
