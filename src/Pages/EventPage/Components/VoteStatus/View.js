import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import Tag from 'antd/lib/tag';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import ToolTip from 'antd/lib/tooltip';
import Popconfirm from 'antd/lib/popconfirm';

function VoteStatusView(props)
{
    const {people: {name, numberOfVote}, onAddVoteButtonClick, onDeleteButtonClick, onMinusVoteButtonClick} = props;
    return (
        <div className={Style.VoteStatus}>
            <div className={Style.wrapper}>
                <div className={Style.peopleName}>{name}</div>
            </div>
            <div className={`${Style.wrapper} ${Style.rightWrapper}`}>
                <div className={Style.tagWrapper}>
                    <ToolTip title={'得票数'}>
                        <Tag className={Style.numberOfVote} color={'blue'}>{numberOfVote}</Tag>
                    </ToolTip>
                </div>
                <ToolTip title={`为${name}加一票`}>
                    <Button type={'primary'} shape={'circle'} onClick={onAddVoteButtonClick}>
                        <Icon type="plus" />
                    </Button>
                </ToolTip>
                <ToolTip title={`为${name}减一票`}>
                    <Button shape={'circle'} onClick={onMinusVoteButtonClick}>
                        <Icon type="minus" />
                    </Button>
                </ToolTip>
                <ToolTip title={`删除${name}`}>
                    <Popconfirm title={`确认删除 ${name}？`} onConfirm={onDeleteButtonClick} placement={'left'}>
                        <Button shape={'circle'} type={'danger'}>
                            <Icon type="delete" />
                        </Button>
                    </Popconfirm>
                </ToolTip>
            </div>
        </div>
    );
}

VoteStatusView.propTypes = {
    people: PropTypes.shape({
        name: PropTypes.string.isRequired,
        numberOfVote: PropTypes.number.isRequired,
    }).isRequired,
    onAddVoteButtonClick: PropTypes.func.isRequired,
    onMinusVoteButtonClick: PropTypes.func.isRequired,
    onDeleteButtonClick: PropTypes.func.isRequired,
};

export default React.memo(VoteStatusView);