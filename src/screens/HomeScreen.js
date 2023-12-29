// HomeScreen.js

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ToDoContainer from "../components/ToDoContainer";
import BottomContainer from "../components/BottomContainer";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);

    // Update completedTasks count
    setCompletedTasks((prevCount) =>
      updatedTasks[index].completed ? prevCount + 1 : prevCount - 1
    );

    
  
  };
  const handleTaskRemoval = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
       <Header taskCount={tasks.length - completedTasks } />
      <ToDoContainer  tasks={tasks} onPress={handleTaskCompletion}  onLongPress={handleTaskRemoval}/>
      <View style={styles.gap} />
      <BottomContainer onAddTask={handleAddTask}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
  },
  gap: {
    flex: 1,
  },
});

export default HomeScreen;
