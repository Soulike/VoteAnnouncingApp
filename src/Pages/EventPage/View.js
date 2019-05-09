import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import TopBar from './Components/TopBar';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';

function EventPage(props)
{
    const {eventName} = props;
    return (
        <div className={Style.EventPage}>
            <TopBar eventName={eventName} />
            <div className={Style.addButtonWrapper}>
                <Tooltip title={'添加人员'}>
                    <Button shape={'circle'} size={'large'} type={'primary'} className={Style.addButton}>
                        +
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}

EventPage.propTypes = {
    eventName: PropTypes.string.isRequired,
};

export default React.memo(EventPage);