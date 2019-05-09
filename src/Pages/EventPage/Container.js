import React from 'react';
import View from './View';
import message from 'antd/lib/message';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';

class EventPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            eventName: '',
        };
    }

    componentDidMount()
    {
        const eventName = localStorage.getItem('eventName');
        if (eventName)
        {
            this.setState({
                eventName,
            });
        }
        else
        {
            message.warning('请先创建活动');
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.EVENT_NAME_INPUT]);
        }
    }

    render()
    {
        const {eventName} = this.state;
        return (
            <View eventName={eventName} />
        );
    }
}

export default EventPage;