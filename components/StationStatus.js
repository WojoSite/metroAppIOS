import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import TrainList from './TrainList'
import {
  BAR_STYLE,
  COLOR_BACKGROUND,
  COLOR_PRIMARY
} from '../constants/styles'

export default StationStatus = props =>
  <View style={styles.container}>
    <StatusBar
      barStyle={BAR_STYLE}
      networkActivityIndicatorVisible={props.loading}
    />
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.handleRefresh}
          title='Pull to Refresh'
        />
      }
    >
      <View>
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
      <View style={styles.platformContainer}>
        <Text style={styles.platformText}>Platform 1</Text>
        {
          props.loading ? <ActivityIndicator /> : (
            <TrainList trains={props.platform1Trains} />
          )
        }
      </View>
      <View style={styles.platformContainer}>
        <Text style={styles.platformText}>Platform 2</Text>
        {
          props.loading ? <ActivityIndicator /> : (
            <TrainList trains={props.platform2Trains} />
          )
        }
      </View>
    </ScrollView>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR_PRIMARY,
    padding: 20,
    paddingBottom: 10
  },
  platformContainer: {
    padding: 20
  },
  platformText: {
    fontSize: 18,
    color: COLOR_PRIMARY,
    fontWeight: 'bold'
  }
});
