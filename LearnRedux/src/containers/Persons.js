import React, { Component } from 'react';
import * as actionType from '../store/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from 'react-redux';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdd} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDelete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProp = (state) => ({
    persons: state.persons,
});

const mapDispatchToProp = (dispatch)=> ({
    personAdd: (name) => dispatch({type: actionType.ADD, name: name}),
    personDelete: (id) => dispatch({type: actionType.DELETE, personId: id})
})

export default connect(mapStateToProp, mapDispatchToProp)(Persons);