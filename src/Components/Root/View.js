import React from 'react';
import Style from './Style.module.scss';

function RootView(props)
{
    const {children} = props;
    return (
        <main className={Style.Root}>
            {children}
        </main>
    );
}

export default React.memo(RootView);