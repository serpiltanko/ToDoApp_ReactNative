import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({taskCount}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.count}>{taskCount}</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {    
    height:100,
    flexDirection:"row",
    justifyContent: "space-between",
    backgroundColor: "#102027",
    paddingHorizontal:16,
    paddingVertical:16,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFA500",
  },
  count: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFA500",
  },
});
