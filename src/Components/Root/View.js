import React from 'react';
import Style from './Style.module.scss';

function RootView(props)
{
    const {children} = props;
    return (
        <div className={Style.Root}>
            {children}
        </div>
    );
}

export default React.memo(RootView);