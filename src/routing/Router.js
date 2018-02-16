import PropTypes from 'prop-types';
import React, { Component } from 'react';
import initialise from '@liquid-state/iwa-router';
import { Router as ReactRouter } from 'react-router-dom';

class IWARouter extends Component {
  static childContextTypes = {
    iwaRouter: PropTypes.object
  }

  constructor(props) {
    super(props);

    const { router, history } = initialise(this.props.app, this.props.historyFactory);
    this.router = router;
    this.history = history;
  }

  getChildContext() {
    return {
      iwaRouter: this.router,
    };
  }

  render() {
    return (
      <ReactRouter history={this.history}>
        {this.props.children}
      </ReactRouter>
    );
  }
}

export default class Router extends Component {
  render() {
    if (this.props.app) {
      return <IWARouter {...this.props} />
    }
    return <ReactRouter history={this.props.historyFactory()} {...this.props}/>
  }
}

