import React from 'react';
import PropTypes from 'prop-types';
import Style from './Style.module.scss';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

function EventNameInputView(props)
{
    const {
        onEventNameInputChange,
        eventName,
        onConfirmButtonClick,
    } = props;
    return (
        <div className={Style.EventNameInput}>
            <div className={Style.formWrapper}>
                <Input size={'large'}
                       placeholder={'+ 添加活动'}
                       className={Style.eventNameInput}
                       value={eventName}
                       onChange={onEventNameInputChange}
                       autoFocus={true}
                       onPressEnter={onConfirmButtonClick} />
                <Button type={'primary'} onClick={onConfirmButtonClick}>确定</Button>
            </div>
        </div>
    );
}

EventNameInputView.propTypes = {
    onEventNameInputChange: PropTypes.func.isRequired,
    eventName: PropTypes.string.isRequired,
    onConfirmButtonClick: PropTypes.func.isRequired,
};

export default React.memo(EventNameInputView);