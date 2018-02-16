import React, {Component} from "react";
import { Switch } from 'react-router';
import { Route } from '../routing';

import Buttons from './Buttons';
import Icons from './Icons';

export default class General extends Component {
    render() {
        return (
            <Switch>
                <Route path="/general/buttons" component={Buttons}/>
                <Route path="/general/icons" component={Icons}/>
            </Switch>
        );
    }
}
