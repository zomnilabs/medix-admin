import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSessionApi } from '../../actions/session';

class Dashboard extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
        getSessionApi: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getSessionApi();
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

export default connect(mapStateToProps, {
    getSessionApi
})(Dashboard);