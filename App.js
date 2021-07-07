import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// import fs from 'react-native-fs';
const fs = require('react-native-fs');

const App = () => {
  useEffect(() => {
    fs.writeFile(fs.DocumentDirectoryPath + '/test.txt', 'MY File', 'utf8')
      .then(success => {
        console.log('SUCCESS');
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
