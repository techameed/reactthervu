import React, { Component } from 'react';
import Modal from './dialogBox.container';

const ErrorBoundary = (WrappedComponent, axios) => {    
 
  return class extends Component {
    state = {
      error: null      
    }
    
    componentDidMount() {              
      axios.interceptors.request.use(request => {
        this.setState({ error: null });
      });
      axios.interceptors.response.use(null, error => {
        this.setState({ error });
      });
    }

    onCloseModal = () => {
      this.setState({ error: null })
    }

    render() {
      const { error } = this.state;

      return (
        <React.Fragment>
          <Modal show={Boolean(error)} 
            onCloseModal={this.onCloseModal}
            content={error && error.message} 
          />
          <WrappedComponent {...this.props} />
        </React.Fragment>
      ); 
    }
  }
}

export default ErrorBoundary;
