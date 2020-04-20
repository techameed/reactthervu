import React, {Component} from 'react';
import Modal from 'react-modal';

const errorBoundary = (wrappedComponent, axios) => {
    
    return class extends Component {

        state = {
            error: null,
            showModal: false
        }
        
         openModal() {
            this.state.error;
        }
        componentDidMount() {
            
            axios.interceptors.request.use(req => {
                this.setState({error: null});
            });
            axios.interceptors.response.use(null, error => {
                this.setState({error: error});
            });
        }

        render() {
            return (
                <>
                <Modal show={this.state.error} >
                   // {this.state.error.message}
                </Modal>
                    <wrappedComponent {...this.props} />
                </>
            );
        }
    }
}