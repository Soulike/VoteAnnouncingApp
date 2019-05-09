import React from 'react';
import View from './View';
import message from 'antd/lib/message';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {People} from './Object';
import notification from 'antd/lib/notification';
import Function from '../../Function';

class EventPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            eventName: '',
            addPeopleModalVisible: false,
            newPeopleName: '',

            peopleList: [], // 人员得票情况表，其下标就是其 ID
        };
    }

    componentDidMount()
    {
        const eventName = Function.getEventName();
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

        const peopleList = Function.getPeopleList();
        this.setState({
            peopleList,
        });

        /*// 以下是测试代码
        import('faker').then(faker =>
        {
            const {peopleList} = this.state;
            for (let i = 0; i < 20; i++)
            {
                peopleList.push(new People(faker.name.findName(), 0));
            }
            Function.setPeopleList(peopleList);
            this.forceUpdate();
        });*/
    }

    onAddPeopleButtonClick = () =>
    {
        this.setState({
            addPeopleModalVisible: true,
        });
    };

    onAddPeopleModalOk = () =>
    {
        const {newPeopleName, peopleList} = this.state;
        if (newPeopleName.length === 0)
        {
            message.warning('请输入新人员的名字');
        }
        else
        {
            peopleList.push(new People(newPeopleName, 0));
            Function.setPeopleList(peopleList);
            this.forceUpdate();
            this.setState({
                addPeopleModalVisible: false,
                newPeopleName: '',
            });
        }
    };

    onAddPeopleModalCancel = () =>
    {
        this.setState({
            addPeopleModalVisible: false,
            newPeopleName: '',
        });
    };

    onNewPeopleNameChange = e =>
    {
        this.setState({
            newPeopleName: e.target.value,
        });
    };

    onAddVoteButtonClickFactory = peopleId =>
    {
        return () =>
        {
            const {peopleList} = this.state;
            const currentPeople = peopleList[peopleId];
            currentPeople.numberOfVote++;
            Function.setPeopleList(peopleList);
            this.forceUpdate();
        };
    };

    onMinusVoteButtonClickFactory = peopleId =>
    {
        return () =>
        {
            const {peopleList} = this.state;
            const currentPeople = peopleList[peopleId];
            if (currentPeople.numberOfVote > 0)
            {
                currentPeople.numberOfVote--;
                Function.setPeopleList(peopleList);
                this.forceUpdate();
            }
        };
    };

    onDeleteButtonClickFactory = peopleId =>
    {
        return () =>
        {
            const {peopleList} = this.state;
            const currentPeople = peopleList[peopleId];
            peopleList.splice(peopleId, 1);
            Function.setPeopleList(peopleList);
            this.forceUpdate(() =>
            {
                notification.success({
                    description: `人员${currentPeople.name}已删除`,
                    message: `删除成功`,
                });
            });
        };
    };

    render()
    {
        const {eventName, peopleList, addPeopleModalVisible, newPeopleName} = this.state;
        return (
            <View eventName={eventName}
                  addPeopleModalVisible={addPeopleModalVisible}
                  onAddPeopleButtonClick={this.onAddPeopleButtonClick}
                  onAddPeopleModalOk={this.onAddPeopleModalOk}
                  onAddPeopleModalCancel={this.onAddPeopleModalCancel}
                  newPeopleName={newPeopleName}
                  onNewPeopleNameChange={this.onNewPeopleNameChange}
                  peopleList={[...peopleList]}  // 必须每次都传入一个新的数组才能保证 View 正确更新
                  onAddVoteButtonClickFactory={this.onAddVoteButtonClickFactory}
                  onMinusVoteButtonClickFactory={this.onMinusVoteButtonClickFactory}
                  onDeleteButtonClickFactory={this.onDeleteButtonClickFactory} />
        );
    }
}

export default EventPage;