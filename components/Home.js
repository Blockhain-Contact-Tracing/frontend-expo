import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({ map: { ...StyleSheet.absoluteFillObject } });
export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <View>
        <View
          style={{ display: 'block', padding: 5, backgroundColor: '#bff4d8' }}>
          <View
            style={{
              display: 'flex',
              margin: 25,
              textAlign: 'left',
              backgroundColor: '#3bf87b',
              borderRadius: 10,
            }}>
            <View
              style={{
                display: 'grid',
                fontSize: 20,
                paddingLeft: 10,
                paddingTop: 20,
                paddingBottom: 40,
                gridTemplateColumns: '1fr 1fr',
                gridGap: 1,
              }}>
              <View style={{ display: 'flex', alignSelf: 'center' }}>
                <Text
                  style={{ fontWeight: 600, fontSize: 20, paddingBottom: 15 }}>
                  Virat Kohli
                </Text>
                <Text>Fully Vaccinated</Text>
                <Text>
                  with <b>Covaxin</b>
                </Text>
                <Text>
                  on <b>19th October 2022</b>
                </Text>
              </View>
              <Image
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  justifySelf: 'center',
                  alignSelf: 'center',
                }}
                source={require('./kohli.jpg')}
              />
            </View>

            <Text
              style={{ display: 'block', paddingLeft: 10, paddingBottom: 5 }}>
              *Eligible for booster dose in <b>36 days</b>
            </Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
          <Text style={{ fontWeight: '600', paddingBottom: 10, fontSize:18 }}>
            Your Neighbourhood
          </Text>
          <View style={{ height: 300 }}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </View>

        <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
          <Text style={{ fontWeight: '600', paddingBottom: 10, fontSize:18 }}>
            Quick Links
          </Text>
          <View
            style={{
              display: 'grid',
              gridTemplateColumns:"1fr 1fr",
              justifyItems: 'center',
            }}>
            <button
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#dfe4ea',
                width: '100px',
                height: '100px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                flex: 2,
                shadowColor: '#000000',
                shadowRadius: 3,
                shadowOpacity: 0.2,
                margin:"4px"
              }}>
              <Image
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                source={require('./privacy.jpg')}
              />
              <Text>Privacy FAQs</Text>
            </button>
            <button
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#dfe4ea',
                width: '100px',
                height: '100px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                flex: 2,
                shadowColor: '#000000',
                shadowRadius: 3,
                shadowOpacity: 0.2,
                margin:"4px"
              }}>
              <Image
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                }}
                source={require('./emergency.png')}
              />
              <Text>Emergency Helpline</Text>
            </button>
            <button
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#dfe4ea',
                width: '100px',
                height: '100px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                flex: 2,
                shadowColor: '#000000',
                shadowRadius: 3,
                shadowOpacity: 0.2,
                margin:"4px"
              }}>
              <Image
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                }}
                source={require('./fund.jpg')}
              />
              <Text>PM Cares Fund</Text>
            </button>            
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
