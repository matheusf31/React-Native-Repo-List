import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default function Repository(props) {
  const { route } = props;

  return <WebView source={{ uri: route.params.repository.html_url }} />;
}

Repository.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.shape(),
    }).isRequired,
  }).isRequired,
};
