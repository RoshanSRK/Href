import React, { useState } from "react";
import { Container, Paper, Button, Flex } from "@mantine/core";
import GoalForm from "@/components/goals/Form";

const GoalsPage = () => {
  const [activeForm, setActiveForm] = useState("shortTerm");

  const handleFormToggle = (form) => {
    setActiveForm(form);
  };

  const renderForm = () => {
    switch (activeForm) {
      case "shortTerm":
        return <GoalForm name="Short Term Goals" />;
      case "mediumTerm":
        return <GoalForm name="Medium Term Goals" />;
      case "longTerm":
        return <GoalForm name="Long Term Goals" />;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the goals (e.g., send them to the server)
    console.log(shortTermGoals);
  };

  return (
    <Container size="sm">
      <Paper shadow="sm" padding="lg">
        <Flex justify={"center"} gap={10}>
          <Button
            variant="outline"
            color="blue"
            onClick={() => handleFormToggle("shortTerm")}
            disabled={activeForm === "shortTerm"}
          >
            Short Term Goals
          </Button>
          <Button
            variant="outline"
            color="orange"
            onClick={() => handleFormToggle("mediumTerm")}
            disabled={activeForm === "mediumTerm"}
          >
            Medium Term Goals
          </Button>
          <Button
            variant="outline"
            color="green"
            onClick={() => handleFormToggle("longTerm")}
            disabled={activeForm === "longTerm"}
          >
            Long Term Goals
          </Button>
        </Flex>
        <div style={{ marginTop: "1rem" }}>{renderForm()}</div>
      </Paper>
    </Container>
  );
};

export default GoalsPage;
