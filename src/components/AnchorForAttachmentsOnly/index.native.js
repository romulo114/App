import React from 'react';
import * as anchorForAttachmentsOnlyPropTypes from './anchorForAttachmentsOnlyPropTypes';
import BaseAnchorForAttachmentsOnly from './BaseAnchorForAttachmentsOnly';
import styles from '../../styles/styles';

const AnchorForAttachmentsOnly = (props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseAnchorForAttachmentsOnly {...props} style={styles.mw100} />
);

AnchorForAttachmentsOnly.propTypes =
    anchorForAttachmentsOnlyPropTypes.propTypes;
AnchorForAttachmentsOnly.defaultProps =
    anchorForAttachmentsOnlyPropTypes.defaultProps;
AnchorForAttachmentsOnly.displayName = 'AnchorForAttachmentsOnly';

export default AnchorForAttachmentsOnly;
