'use strict';
import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testActions from '../ducks/tests';
import SCTest from '../components/SCTest';
import { navStyles } from '../style/style.js';

class TestNavigator extends Component {
  render() {
    var el;
    if (this.props.name === 'test') {
      el = <SCTest tests={this.props.tests} actions={this.props.actions} />;
    } else {
      el = <View />;
    }
    return (
      <View style={navStyles.container}>
        {el}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  tests: state.tests,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(testActions, dispatch),
});

TestNavigator.propTypes = {
  name: PropTypes.string.isRequired,
  tests: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//export default TestNavigator;
export default connect(mapStateToProps, mapDispatchToProps)(TestNavigator);