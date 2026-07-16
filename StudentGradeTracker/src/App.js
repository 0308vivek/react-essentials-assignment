import React, { Component } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filter: "all",
      sort: "none",
      notice: ""
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
    this.setState({
      students: [
        { id: 1, name: "John Carter", grade: 85, passed: true },
        { id: 2, name: "Alice Morgan", grade: 42, passed: false },
        { id: 3, name: "Daniel Lee", grade: 94, passed: true },
        { id: 4, name: "Sofia Patel", grade: 68, passed: true }
      ]
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.students !== this.state.students) {
      console.log("Student list updated");
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.noticeTimer);
    console.log("Cleaning up...");
  }

  showNotice = (notice) => {
    this.setState({ notice });
    window.clearTimeout(this.noticeTimer);
    this.noticeTimer = window.setTimeout(() => this.setState({ notice: "" }), 2600);
  };

  addStudent = (name, grade) => {
    const numericGrade = Number(grade);
    const student = {
      id: Date.now(),
      name: name.trim(),
      grade: numericGrade,
      passed: numericGrade >= 50
    };
    this.setState((state) => ({ students: [...state.students, student] }));
    console.log("Student Added");
    this.showNotice(`${student.name} was added successfully.`);
  };

  updateGrade = (id, grade) => {
    const numericGrade = Number(grade);
    this.setState((state) => ({
      students: state.students.map((student) =>
        student.id === id ? { ...student, grade: numericGrade, passed: numericGrade >= 50 } : student
      )
    }));
    console.log("Student Updated");
    this.showNotice("Student grade updated.");
  };

  toggleStatus = (id) => {
    this.setState((state) => ({
      students: state.students.map((student) =>
        student.id === id ? { ...student, passed: !student.passed } : student
      )
    }));
    console.log("Student Status Toggled");
    this.showNotice("Student status changed.");
  };

  deleteStudent = (id) => {
    this.setState((state) => ({ students: state.students.filter((student) => student.id !== id) }));
    console.log("Student Deleted");
    this.showNotice("Student removed from the tracker.");
  };

  handleFilter = (event) => this.setState({ filter: event.target.value });
  handleSort = (event) => this.setState({ sort: event.target.value });

  getVisibleStudents = () => {
    const { students, filter, sort } = this.state;
    const filtered = students.filter((student) => {
      if (filter === "passed") return student.passed;
      if (filter === "failed") return !student.passed;
      return true;
    });
    if (sort === "highest") return [...filtered].sort((a, b) => b.grade - a.grade);
    if (sort === "lowest") return [...filtered].sort((a, b) => a.grade - b.grade);
    return filtered;
  };

  render() {
    const { students, filter, sort, notice } = this.state;
    const visibleStudents = this.getVisibleStudents();
    const passedCount = students.filter((student) => student.passed).length;
    const average = students.length
      ? Math.round(students.reduce((total, student) => total + student.grade, 0) / students.length)
      : 0;

    return (
      <main className="app-shell">
        <section className="hero" aria-labelledby="page-title">
          <div className="hero__badge">React class components</div>
          <h1 id="page-title">Student Grade Tracker</h1>
          <p>Keep grades, progress, and student status clear at a glance.</p>
          <div className="hero__stats" aria-label="Class summary">
            <div><strong>{students.length}</strong><span>Students</span></div>
            <div><strong>{passedCount}</strong><span>Passed</span></div>
            <div><strong>{average}%</strong><span>Average</span></div>
          </div>
        </section>

        {notice && <div className="notice" role="status">✓ {notice}</div>}

        <section className="workspace">
          <StudentForm onAddStudent={this.addStudent} />
          <section className="students-panel" aria-labelledby="students-heading">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Student records</p>
                <h2 id="students-heading">Your class</h2>
              </div>
              <span className="record-count">{visibleStudents.length} shown</span>
            </div>

            <div className="controls" aria-label="Student list controls">
              <label>
                <span>Filter by status</span>
                <select value={filter} onChange={this.handleFilter}>
                  <option value="all">All students</option>
                  <option value="passed">Passed</option>
                  <option value="failed">Failed</option>
                </select>
              </label>
              <label>
                <span>Sort by grade</span>
                <select value={sort} onChange={this.handleSort}>
                  <option value="none">Default order</option>
                  <option value="highest">Highest grade</option>
                  <option value="lowest">Lowest grade</option>
                </select>
              </label>
            </div>

            <StudentList
              students={visibleStudents}
              onUpdateGrade={this.updateGrade}
              onToggleStatus={this.toggleStatus}
              onDeleteStudent={this.deleteStudent}
            />
          </section>
        </section>
      </main>
    );
  }
}

export default App;
