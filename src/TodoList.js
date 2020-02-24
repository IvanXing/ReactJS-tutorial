import React, { Component , Fragment }from 'react';
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
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
                   {
                       this.state.list.map((item, index) => {
                          return (
                              <TodoItem 
                                index={index} 
                                content={item}
                                deleteItem={this.handleItemDelete.bind(this)}
                               />
                            )
                       })
                   }
                </ul>
            </Fragment>
        );
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBthClick = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        // immutable
        // state不允许我们做任何的改变
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })

    }
 
}

export default TodoList;
