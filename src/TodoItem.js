import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
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