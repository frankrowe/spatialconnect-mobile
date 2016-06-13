'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import palette from '../style/palette';

class SCStore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text numberOfLines={1}>
          Name: {this.props.store.name}
        </Text>
        <Text numberOfLines={1}>
          Type: {this.props.store.type}
        </Text>
        <Text numberOfLines={1}>
          Service: {this.props.store.service}
        </Text>
        <Text numberOfLines={0}>
          ID: {this.props.store.storeId}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 10,
    backgroundColor: palette.gray
  }
});

export default SCStore;