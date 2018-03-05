import React, {Component} from "react";
import { Switch } from 'react-router';
import { Route } from '../routing';

import Sliders from './Sliders';

export default class General extends Component {
    render() {
        return (
            <Switch>
                <Route path="/ls-mobile/slider" component={Sliders}/>
            </Switch>
        );
    }
}
