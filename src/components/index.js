import React, { Component } from 'react'
import { dataUser } from '../mockData/dataUser'
import User from './ListUser'

class Index extends Component {

  state = { dataUser }

  toggleTickAll = (event) => {
    const isChecked = event.target.checked
    this.state.dataUser.forEach(item => item.checked = isChecked)
    this.setState({
      dataUser: [...this.state.dataUser]
    })
  }

  addNewRecord = () => {
    const generateId = () => {

      let max = 0
      this.state.dataUser.forEach(item => {
        if (item.id > max) {
          max = item.id
        }
      })
      return max + 1
    }

    const item = {
      id: generateId(),
      isEdit: true,
      checked: false,
      fullName: '',
      gender: 'male',
      age: 0
    }

    this.state.dataUser.push(item)
    this.setState({
      dataUser
    })
  }

  deleteAll = () => {
    this.setState({
      dataUser: [...this.state.dataUser.filter(user => !user.checked)]
    })
  }

  editRow = (id, isEdit) => {
    const user = this.state.dataUser.find(user => user.id === id)

    user.isEdit = isEdit
    this.setState({
      dataUser: [...this.state.dataUser]
    })
  }

  cancelRow = (id, isEdit) => {
    const user = this.state.dataUser.find(user => user.id === id)

    user.isEdit = isEdit
    this.setState({
      dataUser: [...this.state.dataUser]
    })
  }

  saveRow = (id, valueName, valueAge, valueGender, isEdit) => {
    const user = this.state.dataUser.find(user => user.id === id)

    user.isEdit = isEdit
    user.fullName = valueName
    user.gender = valueGender
    user.age = valueAge
    this.setState({
      dataUser: [...this.state.dataUser]
    })
  }

  deleteItem = id => {
    this.setState({
      dataUser: [...this.state.dataUser.filter(user => user.id !== id)]
    })
  }

  tickRow = (id) => {
    const user = this.state.dataUser.find(user => user.id === id)
    user.checked = !user.checked
    this.setState({
      dataUser: [...this.state.dataUser]
    })
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-12 text-right p-0">
            <button className="btn btn-info mx-2" onClick={this.addNewRecord}>Add</button>
            <button className="btn btn-danger" onClick={this.deleteAll}>Delete</button>
          </div>
        </div>
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th><input type="checkbox" onClick={this.toggleTickAll} /></th>
                <th>ID</th>
                <th>Full name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.dataUser.map((user, index) =>
                <User
                  key={index}
                  user={user}
                  editRow={this.editRow}
                  saveRow={this.saveRow}
                  deleteItem={this.deleteItem}
                  cancelRow={this.cancelRow}
                  tickRow={this.tickRow}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Index
