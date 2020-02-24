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
                {content} - {test}
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
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
    test: 'requireString'
}

export default TodoItem;