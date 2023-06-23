import React, { useState } from "react";
import { Button, Card, TextInput } from "@mantine/core";
import uniqid from "uniqid";
import { ActionIcon, Group } from "@mantine/core";
import { Container } from "@mantine/core";
import { Flex } from "@mantine/core";

function MantineForm() {
  //Render the inputs
  const [incomeInputs, setIncomeInputs] = useState([
    { id: 1, label: "Income 1" },
  ]);
  const [savingInputs, setSavingInputs] = useState([
    { id: 1, label: "Saving 1" },
  ]);
  const [expenseInputs, setExpenseInputs] = useState({
    Health: [{ id: 1, label: "Health Expense 1" }],
    Grocery: [{ id: 1, label: "Grocery Expense 1" }],
    Transport: [{ id: 1, label: "Transport Expense 1" }],
    Food: [{ id: 1, label: "Food Expense 1" }],
    Entertainment: [{ id: 1, label: "Entertainment Expense 1" }],
    "Personal Care": [{ id: 1, label: "Personal Care Expense 1" }],
  });

  const handleAddInput = (section, subheading) => {
    switch (section) {
      case "income":
        setIncomeInputs((inputs) => [
          ...inputs,
          { id: uniqid(), label: `Income ${inputs.length + 1}` },
        ]);
        break;
      case "saving":
        setSavingInputs((inputs) => [
          ...inputs,
          { id: uniqid(), label: `Saving ${inputs.length + 1}` },
        ]);
        break;
      case "expense":
        setExpenseInputs((inputs) => {
          const newInputs = { ...inputs };
          newInputs[subheading] = [
            ...(newInputs[subheading] || []),
            {
              id: uniqid() || 1,
              label: `${subheading} Expense ${
                newInputs[subheading]?.length + 1 || 1
              }`,
            },
          ];
          return newInputs;
        });
        break;
      default:
        break;
    }
  };

  //Delete Button for each input
  const handleDeleteInput = (section, subheading, id) => {
    switch (section) {
      case "income":
        setIncomeInputs((inputs) => inputs.filter((input) => input.id !== id));
        break;
      case "saving":
        setSavingInputs((inputs) => inputs.filter((input) => input.id !== id));
        break;
      case "expense":
        setExpenseInputs((inputs) => {
          const newInputs = { ...inputs };
          newInputs[subheading] = (newInputs[subheading] || []).filter(
            (input) => input.id !== id
          );
          return newInputs;
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  //---------------------------------------------------------------------------------------------

  return (
    <Container shadow="sm" padding="lg">
      <Flex justify="center" direction="column">

        <h2>Income</h2>
        {incomeInputs.map((input) => (
          <Flex
          justify="space-between"
            key={input.id}
            style={{
              marginBottom: 12,
              padding: 10,
              display: "flex",
              outline: "2px solid grey",

            }}
          >
            <TextInput
              w="10"
              label={input.label}
              required
              style={{  width: "600px" }}
            />
            <Button
              color="red"
              onClick={() => handleDeleteInput("income", "", input.id)}
              style={{ alignSelf: "flex-end" }}
            >
              Delete
            </Button>
          </Flex>
        ))}
        <Button
          onClick={() => handleAddInput("income")}
          style={{ marginBottom: 10 }}
        >
          Add Income
        </Button>

        <h2>Savings</h2>
        {savingInputs.map((input) => (
          <Flex
          justify="space-between"
            key={input.id}
            style={{
              marginBottom: 12,
              padding: 10,
              display: "flex",
              outline: "2px solid grey",
            }}
          >
            <TextInput
              w="10"
              label={input.label}
              required
              style={{ width: "600px" }}
            />
            <Button
              color="red"
              onClick={() => handleDeleteInput("saving", "", input.id)}
              style={{ alignSelf: "flex-end" }}
            >
              Delete
            </Button>
          </Flex>
        ))}
        <Button
          onClick={() => handleAddInput("saving")}
          style={{ marginBottom: 10 }}
        >
          Add saving
        </Button>

        <h2>Expenses</h2>
        {Object.keys(expenseInputs).map((subheading) => (
          <div key={subheading}>
            <h3>{subheading}</h3>
            {expenseInputs[subheading].map((input) => (
             // <div key={input.id} style={{ marginBottom: 10, display: "flex" }}>
                <Flex
                justify="space-between"
                  key={input.id}
                  style={{
                    marginBottom: 12,
                    padding: 10,
                    display: "flex",
                    outline: "2px solid grey",
                  }}
                >
                  <TextInput
                    w="10"
                    label={input.label}
                    required
                    style={{ width: "600px" }}
                  />
                  <Button
                    color="red"
                    onClick={() =>
                      handleDeleteInput("expense", subheading, input.id)
                    }
                    style={{ alignSelf: "flex-end" }}
                  >
                    Delete
                  </Button>
                </Flex>
             
            ))}



            <Button
              onClick={() => handleAddInput("expense", subheading)}
              style={{ marginBottom: 10 }}
              w="100%"
            >
              Add {subheading} Expense
            </Button>


          </div>
        ))}

        <Button type="submit">Submit</Button>
      </Flex>
    </Container>
  );
}

export default MantineForm;
