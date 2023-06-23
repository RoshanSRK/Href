import { useState } from "react";
import { Container, TextInput, Button, Space } from "@mantine/core";
const GoalForm = ({ name = "Goal" }) => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  const removeGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const handleNewGoalChange = (e) => {
    setNewGoal(e.target.value);
  };

  const AddGoal = () => {
    if (newGoal.trim() !== "") {
      setGoals([...goals, newGoal]);
      setNewGoal("");
    }
  };
  return (
    <Container size="sm" p={30}>
      <h2>{name}</h2>
      <form>
        {goals.map((goal, index) => (
          <div key={index}>
            <TextInput
              label={`Goal ${index + 1}`}
              value={goal}
              readOnly
              rightSection={
                <Button
                  mr={20}
                  onClick={() => removeGoal(index)}
                  color="red"
                  size="xs"
                >
                  Del
                </Button>
              }
            />
          </div>
        ))}

        <div style={{ display: "flex", alignItems: "center" }}>
          <TextInput
            label="New goal"
            value={newGoal}
            onChange={handleNewGoalChange}
          />
          <div style={{ marginLeft: "16px", marginTop: "25px" }}>
            <Button onClick={AddGoal} variant="outline" color="light" size="sm">
              Create
            </Button>
          </div>
        </div>
        <Space h="lg" />
        <Button type="submit" variant="filled">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default GoalForm;
