import React from 'react';
import {Icon, Row, Col} from 'antd';

export default () => (
    <section>
        <h2>List of Icons</h2>
        <IconGrid title="Directional Icons">
            <IconBlock type="step-backward"/>
            <IconBlock type="step-forward"/>
            <IconBlock type="fast-backward"/>
            <IconBlock type="fast-forward"/>
            <IconBlock type="shrink"/>
            <IconBlock type="arrows-alt"/>
            <IconBlock type="up"/>
            <IconBlock type="down"/>
            <IconBlock type="left"/>
            <IconBlock type="right"/>
        </IconGrid>
    </section>
);

const IconBlock = ({type}) => (
    <div className="icon-block">
        <Icon type={type}/>
        <p>{type}</p>
    </div>
);

const IconGrid = ({children, title}) => (
    <Row>
        <Col xs={24} md={{span: 20, offset: 2}} lg={{span: 16, offset: 4}}>
            <h3>{title}</h3>
            <div className="icon-grid">
                {children}
            </div>
        </Col>
    </Row>
);
