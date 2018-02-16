import React, {Component, Fragment} from "react";
import { List, Button, Radio } from 'antd';


export default class Buttons extends Component {

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
                <h2>Buttons</h2>
                <List size="small" header={<h3>Button Types</h3>}>
                    <List.Item><Button type="primary">Primary</Button></List.Item>
                    <List.Item><Button>Default</Button></List.Item>
                    <List.Item><Button type="dashed">Dashed</Button></List.Item>
                    <List.Item><Button type="danger">Danger</Button></List.Item>
                </List>
                <List size="small" header={<h3>Icon Buttons</h3>}>
                    <List.Item>
                        <Button shape="circle" type="primary" icon="search" className="m-r-1"/>
                        <Button type="primary" icon="search">Search</Button>
                    </List.Item>
                    <List.Item>
                        <Button shape="circle" icon="search" className="m-r-1"/>
                        <Button icon="search">Search</Button>
                    </List.Item>
                    <List.Item>
                        <Button type="dashed" shape="circle" icon="search" className="m-r-1"/>
                        <Button type="dashed" icon="search">Search</Button>
                    </List.Item>
                </List>

                <h3 style={{paddingTop: 12}}>Button Sizes</h3>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>

                <List size="small" split={false}>
                    <List.Item><Button type="primary" size={size}>Resizing Button</Button></List.Item>
                    <List.Item><Button size={size}>Resizing Button</Button></List.Item>
                    <List.Item><Button type="dashed" size={size}>Resizing Button</Button></List.Item>
                    <List.Item><Button type="danger" size={size}>Resizing Button</Button></List.Item>
                </List>

            </Fragment>
        )
    }
}
