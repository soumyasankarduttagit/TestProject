import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartConfig2d: {
        type: "angulargauge",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
          "chart": {
            "caption": "Customer Satisfaction Score",
            "subcaption": "Last week",
            "lowerLimit": "0",
            "upperLimit": "100",
            "lowerLimitDisplay": "Bad",
            "upperLimitDisplay": "Good",
            "showValue": "1",
            "valueBelowPivot": "1",
            "theme": "fusion"
          },
          "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00"
              },
              {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
              },
              {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
              }
            ]
          },
          "dials": {
            "dial": [{
              "value": "67"
            }]
          }
        }
      },



  }
  }

  render() {
    const modules =['widgets'];
    return (
      <ScrollView>
        <View>

          {/* 2D Plain Chart */}
          <View style={styles.container}>
            <View style={styles.chartContainer}>
              <Text style={styles.heading}>
                Angular Gauge
              </Text>
              <ReactNativeFusionCharts
                chartConfig={this.state.chartConfig2d}
                modules={modules}
              />
            </View>
          </View>


      

        </View>

      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    width: "100%",
    height: 500,
    borderWidth: 5,
    marginBottom: 10
  }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('ReactNativeFusionCharts', () => App);