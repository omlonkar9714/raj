import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

import Screen1 from './screens/screen1';

const MusicRoute = () => <Screen1 />;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'music',
        title: 'Music',
        icon: 'history',
        color: '#3F51B5',
      },
      {
        key: 'albums',
        title: 'Albums',
        icon: 'album',
        color: '#009688',
      },
      {
        key: 'recents',
        title: 'Recents',
        icon: 'history',
        color: '#795548',
      },
      {
        key: 'profile',
        title: 'Profile',
        icon: 'history',
        color: '#607D8B',
      },
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    profile: ProfileRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
