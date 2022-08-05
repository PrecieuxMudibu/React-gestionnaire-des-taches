import React from 'react'

class Tasks extends React.Component {
  state = {
    tasks : [
      {id: 1, nom: 'Apprendre HTML'},
      {id: 2, nom: 'Apprendre CSS'},
      {id: 3, nom: 'Apprendre PHP'},
      {id: 4, nom: 'Apprendre JavaScript'},
    ],
    count : 0,
    newTask: 'Jeanne'
  }

  // increment = () => {
  //   console.log(this.state.count += 1)
  // }

  changeValue = (event) => {
    const value = event.currentTarget.value //Récupérer la valeur qui est tapée
    this.setState({newTask: value}) // Mettre à jour cette valeur directement sur L'input
  }

  addTask = (event) => {
    event.preventDefault();
    const id = new Date().getTime()
    const nom = this.state.newTask

    const tasks = this.state.tasks.slice()
    tasks.push({id: id, nom: nom})
    this.setState({tasks: tasks})
  }
  
  render () {
    return (
      <>
          {this.state.tasks.map((task) => (<li key={task.id}>{task.nom}</li>))}
          {/* <button onClick={this.increment}>Incrémenter</button> */}

          <form>
              <input type="text" value={this.state.newTask} onChange={this.changeValue}/ >
              <button onClick={this.addTask}>Ajouter une tâche</button>
          </form>
      </>
    )

  }
}

export default Tasks
