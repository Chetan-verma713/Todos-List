import React from 'react';
import './todolist.css';


class AddItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addingTask: "",
            addingTime: "",
        }
    }

    render() {

        return (
            <footer className='fixed-bottom row'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (this.state.addingTask.length !== 0 && this.state.addingTime.length !== 0) {
                        this.props.addItems(this.state.addingTask, this.state.addingTime);
                        this.setState({
                            addingTask: "",
                            addingTime: ""
                        })
                    }
                    else {
                        alert("Enter Task or Time to add into Todo-List");
                    }
                }} className='footer-item d-flex' method="POST">
                    <div className="footer_input col-2">
                        <input type="text" className='todo-task ' placeholder="Enter the task." name="addingTask" onChange={(e) => {
                            this.setState({
                                addingTask: e.currentTarget.value
                            })
                        }} value={this.state.addingTask} required
                        />
                    </div>
                    <div className="footer_time_input col-2">
                        <input type="time" id='todo-time' name="addingTime" onChange={(e) => {
                            this.setState({
                                addingTime: e.currentTarget.value
                            })
                        }} value={this.state.addingTime} required
                        />
                    </div>
                    <div className="footer_push col-2" >
                        <button type='submit' className='btn btn-primary w-100 submit-btn' ><h2>+</h2></button>
                    </div>
                </form>
            </footer>
        );
    }
}

export default AddItems;