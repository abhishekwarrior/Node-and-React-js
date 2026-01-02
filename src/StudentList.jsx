// Create a React class component StudentList that:
// Uses state to store a list of students.
// Uses componentDidMount to initialize the list with 3 students.
// Displays the students in a <ul> when the component mounts.
import { Component } from "react";

export default class StudentList extends Component
{

    constructor()
    {
        super();
        this.state = {students: []};
    }
    componentDidMount()
    {
        this.setState=({student:["abhishek","pragati","amol"]})
    }

    render()
    {
        return(
        <div>
            <h1>This is the student list</h1>
            <ul>
                {this.state.students.map((student, index) => (<li key={index}>{student}</li>))}
            </ul>
        </div>)
        
    }
}
