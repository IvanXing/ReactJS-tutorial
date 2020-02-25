import React, { Component , Fragment }from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import axios from 'axios';
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
                        ref={(inputDom) => {this.inputDom = inputDom}}
                    />
                    <button onClick={this.handleBthClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                   {this.getTodoItem()}
                </ul>
                {/* props发生改变时，子组件render */}
                <Test content={this.state.inputValue}/>
            </Fragment>
        );
    }

    componentDidMount() {
      axios.get('/api/todolist')
        .then( () => {console.log('succ')} )
        .catch( () => {console.log('error')} )
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
      // e.target是该input的dom
      // const value = e.target.value;

      // 使用ref可以直接拿到input的dom
      const value = this.inputDom.value;

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
        }), () => {
          console.log('setState第二个参数回调', this.ul.querySelectorAll('div').length)
        })
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
