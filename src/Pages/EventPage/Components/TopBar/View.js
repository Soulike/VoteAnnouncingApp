import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';

function TopBarView(props)
{
    const {eventName} = props;
    return (
        <div className={Style.TopBar}>
            <span className={Style.eventName}>{eventName}</span>活动
        </div>
    );
}

TopBarView.propTypes = {
    eventName: PropTypes.string.isRequired,
};

export default React.memo(TopBarView);