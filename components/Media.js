import React from 'react';
import { FlatList, Text, View, ScrollView, Image } from 'react-native';

const imgStyle={
  width:"100%", height:"300%", border: "1px solid"
}

export default function Media() {
  return (
    <>
      <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <View
          style={{
            marginHorizontal: 25,
            paddingVertical: 10,
          }}>
          <Image
            style={imgStyle}
            source={require('./c1.png')}
          />
          <Text style={{ fontWeight: 600, marginBottom: 10}}>
            Coronavirus disease (COVID-19)
          </Text>
          <Image style={imgStyle} source={require('./c2.png')}/>
          <Text style={{ fontWeight: 600 }}>
            Pfizer’s New Covid-19 Booster Targeting Omicron Could Be Authorized
            This Week
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
