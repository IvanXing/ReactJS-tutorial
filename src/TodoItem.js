import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // nextProps nextState 目标值
    shouldComponentUpdate = (nextProps, nextState) => {
        if(nextProps.content !== this.props.content) {
            return true;
        }else {
            return false;
        }
    }

    render() {
        // 父组件input输入时，会render 父组件render时，子组件也会render
        // 但是没有必要
        console.log('child render')
        const { content , test } = this.props;
        return (
            <div onClick={this.handleClick}>
                {test} - {content}
            </div>
        )
    }
    
    handleClick() {
        // 父组件传来的方法
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;