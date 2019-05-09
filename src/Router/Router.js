import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../CONFIG';
import Root from '../Components/Root';

export default () =>
{
    return (
        <HashRouter>
            <Root>
                <Switch>
                    {
                        Object.values(PAGE_ID).map(id => <Route path={PAGE_ID_TO_ROUTE[id]}
                                                                component={PAGE_ID_TO_COMPONENT[id]}
                                                                key={PAGE_ID_TO_ROUTE[id]} />)
                    }
                    <Route children={<Redirect to={PAGE_ID_TO_ROUTE[PAGE_ID.EVENT_NAME_INPUT]} />} />
                </Switch>
            </Root>
        </HashRouter>
    );
};