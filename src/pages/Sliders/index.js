import React, {Component, Fragment} from "react";
import { List, Slider as AntSlider } from 'antd';
import { Slider } from '@liquid-state/ls-ui-kit';
import 'antd';

export default class Sliders extends Component {

    state = {
        size: 'default'
    };

    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
    };

    render() {
        const {
            size
        } = this.state;

        return (
            <Fragment>
                <h2>Sliders</h2>
                <Slider defaultValue={10} />
            </Fragment>
        )
    }
}
