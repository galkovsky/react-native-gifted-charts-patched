import React from 'react';
import {View} from 'react-native';
import {BarDefaults} from '../../utils/constants';

const Cap = props => {
  const {
    capThicknessFromItem,
    capThicknessFromProps,
    capColorFromItem,
    capColorFromProps,
    capRadiusFromItem,
    capRadiusFromProps,
    capBottom
  } = props;



  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        bottom: capBottom ? 0: undefined,
        height:
          capThicknessFromItem ??
          capThicknessFromProps ??
          BarDefaults.capThickness,
        backgroundColor:
          capColorFromItem ?? capColorFromProps ?? BarDefaults.capColor,
        borderTopLeftRadius:
            (!capBottom ? capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius : undefined),
        borderTopRightRadius:
            (!capBottom ? capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius : undefined),
        borderBottomLeftRadius:
            (capBottom ? capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius : undefined),
        borderBottomRightRadius:
            (capBottom ? capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius : undefined),
      }}
    />
  );
};

export default Cap;
