import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Styled';
import { getRequest } from '../Request';

const SingleApp = ({ app }) => {
    const showData = () => {
        getRequest(`/details/${app.id}`).then((data) => alert(JSON.stringify(data)));
    }
    return (<Container onClick={() => showData()}>
        <h2>{app.name}</h2>
        <p>{app.company}</p>
    </Container>)
};

SingleApp.propTypes = {
    app: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired
    })
};

export default SingleApp;