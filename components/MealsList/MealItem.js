import { StyleSheet, Text, View, Image, Pressable, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability}) => {
  const navigation = useNavigation();
  
  const selectedMealItemHandler = () => {
    navigation.navigate("MealDetailsScreen", {
      mealId: id
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable  
        android_ripple={{color: '#ccc'}}
        style = {({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress = {selectedMealItemHandler}
      >
        <View style={styles.innerContainer}>
            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: 'white',
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden':'visible',
  },
  buttonPressed:{
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center'
  },

});
