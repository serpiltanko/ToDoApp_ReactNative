import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const BottomContainer = ({onAddTask}) => {

    const [newTask, setNewTask] = useState("")
    const [isTextInputFocused, setIsTextInputFocused] = useState(false);


    const handleSave = () => {
      if (newTask.trim() !== "") {
        onAddTask(newTask);
        setNewTask("");
      }
    };

    
    

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput style={styles.text}
         placeholder="Yapılacak..."    
         value={newTask} 
         onChangeText={(text)=>setNewTask(text)}     
         onFocus={() => setIsTextInputFocused(true)}
         onBlur={() => setIsTextInputFocused(false)}
         />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave}>
          <View
              style={[
                styles.button,
                isTextInputFocused && styles.yellowButton,
              ]}
            >
              <Text style={styles.buttonText}>Kaydet</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#102027",
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: "#37474F",
    backgroundColor: "#37474F",
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  text: {
    color: "#808080",
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#78909C",
    padding: 8,
  },

  buttonContainer: {
    marginTop: 10,
    borderColor: "#37474F",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderWidth: 1,
    borderColor: "#808080",
    backgroundColor: "#808080",
    borderRadius: 20,
    paddingHorizontal: 120,
    paddingVertical: 15,
  },
  yellowButton: {
    backgroundColor: "#FFA500",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
});
