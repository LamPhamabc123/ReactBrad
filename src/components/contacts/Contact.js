import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {

  state = {
    showContactinfo: false
  };
  onShowClick = () => {
    this.setState({
      showContactinfo: !this.state.showContactinfo
    });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
   
  }

  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };
  static propTypes = {
    contact: PropTypes.object.isRequired
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    // const { contact } = this.props;
    const { showContactinfo } = this.state;
    return (

      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name} {' '}<i
                onClick={this.onShowClick}
                className="fas fa-sort-down"
                style={{ cursor: 'pointer' }}
              />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i 
                    className="fas fa-pencil-alt" 
                    style={{
                      cursor: 'pointer', 
                      float: 'right',
                      // color: 'black',
                      marginRight: '1rem'
                      }}>
                  </i>
                </Link>
              </h4>
              {showContactinfo ? (<ul className="list-group">
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
              </ul>) : null}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// }
export default Contact;
