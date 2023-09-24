import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([])

  //this sendRequest: fetchTasks is a way to give alias to this function pointer
  const {isLoading, error, sendRequest: fetchTasks} = useHttp()


  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://sapient-pen-311710-default-rtdb.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // we can't pass fetchTask in the dep array 'cause fetchTasks points to sendRequest in use-http custom hook, when that gets invoked by this, it updates the state which is being used in this componenent, so in react whenever a state being used changes then componenent is also re-rendered, then again a sendRequest function pointer is returned to the fetchTask which is a new one so useEffect dep thinks it's a change in dependency and hence reruns the fucntion creating infinite loop
  // the way to avoid this is by using useCallback then pass fetchTasks, this will memoize the fucntion/property and only change when the dep list of useCallback changes
  useEffect(() => {
    const transformTasks = taskObj => {
      const loadedTasks = [];
  
      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
    }
    fetchTasks({
      url: 'https://sapient-pen-311710-default-rtdb.firebaseio.com/tasks.json'
    }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
