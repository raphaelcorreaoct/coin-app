import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import coins from '../../MOCK';
import styles from './styles';
import { ListItem } from './listItem';
import { useState } from 'react';

export default function HomeScreen() {

  const [color, setColor] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => {
        setColor(!color)
      }}>
        <Text style={[styles.title, { color: color ? '#ff0000' : '#000' }]}>Coin App</Text>
      </TouchableOpacity>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={coins}
        renderItem={({ item }) => {
          return <ListItem
            coin={item}
          />
        }}
      />
    </ SafeAreaView>
  );
}
