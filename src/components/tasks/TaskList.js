import React, { Component } from 'react'
import NewTaskForm from './NewTaskForm'

const api_url = 'http://localhost:3001/api/v1/tasks'

class TaskList extends Component {
    
    constructor(props) {
        super(props)
        //items[0] = #Task 1
        //items[1] = #Task 2
        this.state = {
            tasks: []
        }

    this.getTasks = this.getTasks.bind(this)
        
    }

    componentDidMount() {
        //Get the items from the API
        this.getTasks()
    }

    getTasks = () => {
        let token = "Bearer " + localStorage.getItem("jwt")
        fetch(api_url, {

          method: 'GET',
          headers: {
            'Authorization': token
          }
        })
        .then((rsp) => rsp.json())
        .then(response => {
            console.log(response)
            this.setState({
                tasks: response
            })
        }) 
    }

    
    render() {
        return (
            <div className="task-list">
                <NewTaskForm/>
                <ul >
                    {this.state.tasks.map((task) => {
                        <li key={task.id}>{task.name}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default TaskList
