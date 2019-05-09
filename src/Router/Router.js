import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../CONFIG';
import RootView from '../Components/Root';

export default () =>
{
    return (
        <BrowserRouter>
            <RootView>
                <Switch>
                    {
                        Object.values(PAGE_ID).map(id => <Route path={PAGE_ID_TO_ROUTE[id]}
                                                                component={PAGE_ID_TO_COMPONENT[id]}
                                                                key={PAGE_ID_TO_ROUTE[id]} />)
                    }
                    <Route children={<Redirect to={PAGE_ID_TO_ROUTE[PAGE_ID.EVENT_NAME_INPUT]} />} />
                </Switch>
            </RootView>
        </BrowserRouter>
    );
};