import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartConfig2d: {
        type: "column2D",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
            caption: "Countries With Most Oil Reserves [2017-18]",
            subCaption: "In MMbbl = One Million barrels",
            xAxisName: "Country",
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            theme: "fusion",
            exportEnabled: 1 // to enable the export chart functionality
          },
          data: [
            { label: "Venezuela", value: "250" },
            { label: "Saudi", value: "260" },
            { label: "Canada", value: "180" },
            { label: "Iran", value: "140" },
            { label: "Russia", value: "115" },
            { label: "UAE", value: "100" },
            { label: "US", value: "30" },
            { label: "China", value: "30" },
          ]
        }
      },



  }
  }

  render() {
    return (
      <ScrollView>
        <View>

          {/* 2D Plain Chart */}
          <View style={styles.container}>
            <View style={styles.chartContainer}>
              <Text style={styles.heading}>
                Plain Chart
              </Text>
              <ReactNativeFusionCharts
                chartConfig={this.state.chartConfig2d}
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