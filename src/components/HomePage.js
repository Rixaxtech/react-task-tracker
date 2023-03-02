import Tasks from "./Tasks";
import AddTask from "./AddTask";

function HomePage(props) {
    const { showAddTask, tasks, addTask, deleteTask, toggleReminder } = props;
    return (
      <>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks To Show"
        )}
      </>
    );
  }

export default HomePage