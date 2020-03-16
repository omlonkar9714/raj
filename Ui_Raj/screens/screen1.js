import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import SubTabNavigator from '../navigation/subTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

console.disableYellowBox = true;

class screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 56,
            width: '100%',
            backgroundColor: '#000000',
          }}>
          <View>
            <Image
              style={{marginHorizontal: 5, height: 40, width: 40}}
              source={{
                uri: 'https://i.ya-webdesign.com/images/3-bar-menu-png-12.png',
              }}></Image>
          </View>
          <View
            style={{
              flex: 1,
              marginRight: 15,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Image
              style={{marginHorizontal: 5, height: 25, width: 25}}
              source={{
                uri:
                  'https://i.ya-webdesign.com/images/white-bell-icon-png-11.png',
              }}></Image>
          </View>
        </View>

        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 30,
            width: '100%',
            backgroundColor: '#282828',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={{height: 55, width: 55, borderRadius: 27.5}}
                source={{
                  uri:
                    'https://puzl-production.s3.amazonaws.com/files/uploads/files/001/684/988/original/john_martin.jpg?1538144071',
                }}></Image>
            </View>

            <View
              style={{
                marginLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#fff'}}>John Doe</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              height: 0.3,
              backgroundColor: '#ff9900',
            }}></View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <View>
                <Text style={{color: 'white', fontSize: 15}}>
                  Total Refered
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text style={{color: 'white', fontSize: 25}}>10</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  paddingHorizontal: 30,
                  borderRadius: 35,
                }}>
                <Text style={{color: '#ff9900', fontSize: 20}}>REFER</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingTop: 20,
          }}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View>
              <Text style={{fontSize: 20, color: 'blue'}}>Conversion</Text>
            </View>
            <View
              style={{
                marginTop: 2,
                backgroundColor: '#ff9900',
                height: 2,
                width: '10%',
              }}></View>
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  height: 112,
                  width: 112,
                  backgroundColor: '#282828',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#ff9900',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Site
                  </Text>
                  <Text
                    style={{
                      color: '#ff9900',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Visit
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                    250
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  height: 112,
                  width: 112,
                  backgroundColor: '#282828',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#ff9900',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Booking
                  </Text>
                  <Text
                    style={{
                      color: '#ff9900',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Amount
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                    150
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  height: 112,
                  width: 112,
                  backgroundColor: '#282828',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#ff9900',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    First
                  </Text>
                  <Text
                    style={{
                      color: '#ff9900',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Cheque
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                    100
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: 25,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 20, color: 'blue'}}>Rewards</Text>
              <Text style={{fontSize: 15, color: '#ccc'}}>View All</Text>
            </View>
            <View
              style={{
                marginTop: 2,
                backgroundColor: '#ff9900',
                height: 2,
                width: '10%',
              }}></View>

            <SubTabNavigator />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'flex-start',
    backgroundColor: '#cccccc',
  },
});

// screen1.navigationOptions = {
//   tabBarIcon: ({tintColor, focused}) => (
//     <Icon
//       name={focused ? 'ios-settings' : 'md-settings'}
//       color={tintColor}
//       size={25}
//     />
//   ),
// };

export default screen1;
