import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';
import PropTypes from 'prop-types';
import { closeModal } from '../../components/modal';
import Input from '../../components/ui/input/index';

class EditModal extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSave: PropTypes.func.isRequired

    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube
        };

        bindAll(this, ['close', 'changeName', 'changeLink', 'save']);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    changeName(name) {
        this.setState({name});
    }

    changeLink(youtube) {
        this.setState(youtube);
    }

    save() {
        const { id, name, youtube } = this.state;
        this.props.dispatch(this.props.onSave({id, name, youtube}));
        this.close();
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p><b>ID:</b>{ this.props.id }</p>
                    <Input onChange={ this.changeName } value={ this.state.name }/>
                    <Input onChange={ this.changeLink } value={ this.state.youtube }/>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-default' onClick={ this.close }>Закрыть</button>
                    <button className='btn btn-success' onClick={ this.save }>Сохранить</button>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal);
