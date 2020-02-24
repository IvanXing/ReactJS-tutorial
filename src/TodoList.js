import React, { Component , Fragment }from 'react';
import TodoItem from './TodoItem'
import Test from './Test'
import './style.css'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBthClick = this.handleBthClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBthClick}>提交</button>
                </div>
                <ul>
                   {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        );
    }

    getTodoItem() {
      return  this.state.list.map((item, index) => {
        return (
            <TodoItem 
              key={index}
              index={index} 
              content={item}
              deleteItem={this.handleItemDelete}
             />
          )
     })
    }

    handleInputChange(e) {
      const value = e.target.value
      this.setState(() => ({
        inputValue: value
      }))
        // this.setState(() => {
        //   return {
        //     inputValue: e.target.value
        //   }
        // })
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleBthClick() {
      // prevState 参数是修改之前的数据 this.state 避免改变state
        this.setState((prevState) => ({
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }

    handleItemDelete(index) {
        
        this.setState((prevState) => {
          const list = [...prevState.list];
          list.splice(index, 1);
          return { list }   // list:list
        })

        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list
        // })

    }
 
}

export default TodoList;
