import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

class screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [
        {
          id: 1,
          name: 'Nissan',
          url:
            'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg',
        },
        {
          id: 2,
          name: 'Oppo',
          url: 'https://static.toiimg.com/photo/66951221.cms',
        },
        {
          id: 3,
          name: 'LG Fridge',
          url:
            'https://www.gizbot.com/img/600x40/img/2018/04/inverter-linear-compressor-ff-d-12feb18-1523088361.jpg',
        },
        {
          id: 4,
          name: 'HPL Washing',
          url:
            'https://cdn2.vectorstock.com/i/1000x1000/29/91/3d-washing-machine-and-laundry-basket-vector-26972991.jpg',
        },
      ],
      imagesArray: [
        {
          url:
            'https://swaggrabber.com/wp-content/uploads/2017/08/amazon-add-on-items.jpg',
        },
        {
          url: 'https://i.ytimg.com/vi/zT7C2TVjkaU/maxresdefault.jpg',
        },
        {
          url:
            'https://www.vskills.in/certification/blog/wp-content/uploads/2019/03/Advertisement-Media.jpg',
        },
      ],
    };
  }

  _renderItem = itemMain => {
    console.log('ItemData' + JSON.stringify(itemMain));
    return (
      <View style={{height: 110, width: 100, backgroundColor: 'pink'}}>
        <View>
          <Image
            style={{height: 80}}
            source={{
              uri: itemMain.item.url,
            }}></Image>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#282828',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 15}}>
            {itemMain.item.name}
          </Text>
        </View>
      </View>
    );
  };

  _renderItem2 = itemMain => {
    console.log('ItemData' + JSON.stringify(itemMain));
    return (
      <View style={{height: 150}}>
        <Image
          style={{flex: 1, aspectRatio: 1.5, resizeMode: 'cover'}}
          source={{
            uri: itemMain.item.url,
          }}></Image>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{width: '100%'}}>
            <FlatList
              horizontal={true}
              data={this.state.itemData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id + Math.random() + 'b'}
              renderItem={this._renderItem.bind(this)}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: '100%',
                    width: 10,
                    backgroundColor: '#fff',
                  }}></View>
              )}
            />
          </View>
          <View style={{marginTop: 15, width: '100%'}}>
            <FlatList
              horizontal={true}
              data={this.state.imagesArray}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id + Math.random() + 'a'}
              renderItem={this._renderItem2.bind(this)}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: '100%',
                    width: 10,
                    backgroundColor: '#fff',
                  }}></View>
              )}
            />
          </View>
          <View style={{marginTop: 15, width: '100%'}}>
            <FlatList
              horizontal={true}
              data={this.state.imagesArray}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id + Math.random() + 'a'}
              renderItem={this._renderItem2.bind(this)}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: '100%',
                    width: 10,
                    backgroundColor: '#fff',
                  }}></View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
export default screen2;
