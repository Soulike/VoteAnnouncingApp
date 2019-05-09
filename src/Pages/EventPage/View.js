import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import TopBar from './Components/TopBar';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import Modal from 'antd/lib/modal';
import Input from 'antd/lib/input';
import VoteStatus from './Components/VoteStatus';
import Empty from 'antd/lib/empty';
import BackTop from 'antd/lib/back-top';
import Icon from 'antd/lib/icon';

function EventPage(props)
{
    const {
        eventName,
        onAddPeopleButtonClick,
        addPeopleModalVisible,
        onAddPeopleModalOk,
        onAddPeopleModalCancel,
        onNewPeopleNameChange,
        newPeopleName,
        peopleList,
        onAddVoteButtonClickFactory,
        onMinusVoteButtonClickFactory,
        onDeleteButtonClickFactory,
    } = props;
    return (
        <div className={Style.EventPage}>
            <TopBar eventName={eventName} />
            <div className={Style.voteStatusList}>
                {
                    peopleList.length === 0 ?
                        <div className={Style.emptyWrapper}><Empty description={'暂无人员'} /></div> :
                        peopleList.map((people, i) => (
                                <div className={Style.voteStatusWrapper}>
                                    <VoteStatus people={people}
                                                onAddVoteButtonClick={onAddVoteButtonClickFactory(i)}
                                                onDeleteButtonClick={onDeleteButtonClickFactory(i)}
                                                onMinusVoteButtonClick={onMinusVoteButtonClickFactory(i)}
                                                key={i} /></div>
                            ),
                        )
                }

            </div>
            <div className={Style.addPeopleButtonWrapper}>
                <Tooltip title={'添加人员'}>
                    <Button shape={'circle'}
                            size={'large'}
                            type={'primary'}
                            className={Style.addPeopleButton}
                            onClick={onAddPeopleButtonClick}>
                        <Icon type={'plus'} />
                    </Button>
                </Tooltip>
            </div>
            <BackTop className={Style.backToTopButton} />
            <Modal destroyOnClose={true}
                   title={'添加人员'}
                   visible={addPeopleModalVisible}
                   onOk={onAddPeopleModalOk}
                   onCancel={onAddPeopleModalCancel}
                   width={300}>
                <Input placeholder={'新人员的名字'}
                       autoFocus={true}
                       value={newPeopleName}
                       onChange={onNewPeopleNameChange}
                       onPressEnter={onAddPeopleModalOk} />
            </Modal>
        </div>
    );
}

EventPage.propTypes = {
    eventName: PropTypes.string.isRequired,
    onAddPeopleButtonClick: PropTypes.func.isRequired,
    addPeopleModalVisible: PropTypes.bool.isRequired,
    onAddPeopleModalOk: PropTypes.func.isRequired,
    onAddPeopleModalCancel: PropTypes.func.isRequired,
    onNewPeopleNameChange: PropTypes.func.isRequired,
    newPeopleName: PropTypes.string.isRequired,
    peopleList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        numberOfVote: PropTypes.number.isRequired,
    })).isRequired,
    onAddVoteButtonClickFactory: PropTypes.func.isRequired,
    onMinusVoteButtonClickFactory: PropTypes.func.isRequired,
    onDeleteButtonClickFactory: PropTypes.func.isRequired,
};

export default React.memo(EventPage);