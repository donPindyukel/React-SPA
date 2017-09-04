import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { openModal } from '../../components/modal';
import EditModal from './modals/edit-modal';
import DeleteModal from './modals/delete-modal';
import { editItem, deleteItem } from './actions';

class ListItem extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired,
        youtube: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit() {
        const { id, name, youtube } = this.props;
        this.props.dispatch(openModal({
            content: <EditModal id={ id } name={ name } youtube={ youtube } onSave={ editItem }/>,
            title: 'Редактировать'
        }));
    }

    delete() {
        const { id, name } = this.props;
        this.props.dispatch(openModal({
            content: <DeleteModal id={ id } name={ name } onSuccess={ deleteItem }/>,
            title: 'Редактировать'
        }));
    }
    
    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={ `/list/${ this.props.id }` }>Item { this.props.name }</Link></td>
                <td>
                    <button className='btn btn-success' onClick={ this.edit }>
                        <i className='glyphicon glyphicon-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={ this.delete }>
                        <i className='glyphicon glyphicon-remove' />
                    </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ListItem);
