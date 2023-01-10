import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        backgroundColor: '#e2b497',
        borderRadius: 6,
    },
    itemText: {
        textAlign: 'center',
        color: '#351401',
    }
})