import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center', 
      },
      subTitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
      }
});