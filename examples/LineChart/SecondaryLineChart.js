import React from 'react';
import {View} from 'react-native';
import {LineChart} from '../../src/LineChart';

const SecondaryLineChart = () => {
    const d1 = [
      {value: 110},
      {value: 90},
      {value: 100},
      {value: 120},
      {value: 100, label: '2005', showXAxisIndex: true},
      {value: 80},
      {value: 90},
      {value: 110},
      {value: 120},
      {value: 100, label: '2010', showXAxisIndex: true},
      {value: 90},
      {value: 100},
      {value: 88},
      {value: 80},
      {value: 120, label: '2015', showXAxisIndex: true},
      {value: 76},
      {value: 104},
      {value: 112},
    ];
    const d2 = [
      0.055, 0.02, 0.1, 0.01, 0.05, 0.06, 0.08, 0.1, 0.08, 0.07, 0.06, 0.025,
      0.04, 0.06, 0.045, 0.09, 0.06, 0.04,
    ];
  
    return (
      <View style={{marginTop: 100}}>
        <LineChart
          data={d1}
          maxValue={140}
          noOfSections={7}
          spacing={16}
          hideDataPoints
          hideRules
          color="orange"
          yAxisColor={'orange'}
          showYAxisIndices
          yAxisIndicesColor={'orange'}
          yAxisIndicesWidth={10}
          secondaryData={d2.map(v => ({value: v}))}
          secondaryLineConfig={{color: 'blue'}}
          secondaryYAxis={{
            maxValue: 0.2,
            noOfSections: 4,
            showFractionalValues: true,
            roundToDigits: 3,
            yAxisColor: 'blue',
            yAxisIndicesColor: 'blue',
          }}
          xAxisLabelTextStyle={{width: 80, marginLeft: -36}}
          xAxisIndicesHeight={10}
          xAxisIndicesWidth={2}
        />
      </View>
    );
  };
  
  export default SecondaryLineChart;
  