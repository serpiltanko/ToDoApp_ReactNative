import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const ToDoContainer = ({ tasks, onPress, onLongPress }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View style={styles.container}>
         
            <TouchableOpacity
              key={index}
              onPress={() => onPress(index)}
              onLongPress={() => onLongPress(index)}
              style={[
                styles.innerContainer,
                task.completed && styles.completedTaskContainer,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  task.completed && styles.completedTaskText,
                ]}
              >
                {task.text}
              </Text>
            </TouchableOpacity>
        
        </View>
      ))}
    </ScrollView>
  );
};

export default ToDoContainer;

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    backgroundColor: "#7DA453",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: "95%",
    height: 45,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  completedTaskContainer: {
    backgroundColor: "gray",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    opacity: 0.7,
    marginLeft: 8,
    color: "white",
  },
});
