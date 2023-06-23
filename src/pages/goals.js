import React, { useState } from 'react';
import { Container, Paper, TextInput, Button, Space, Autocomplete } from '@mantine/core';

const GoalsPage = () => {
  const [activeForm, setActiveForm] = useState('shortTerm');

  const handleFormToggle = (form) => {
    setActiveForm(form);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'shortTerm':
        return <ShortTermGoalsForm />;
      case 'mediumTerm':
        return <MediumTermGoalsForm />;
      case 'longTerm':
        return <LongTermGoalsForm />;
      default:
        return null;
    }
  };

  const [shortTermGoals, setShortTermGoals] = useState([]);
  const [newShortTermGoal, setNewShortTermGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the goals (e.g., send them to the server)
    console.log(shortTermGoals);
  };

  const handleNewShortTermGoalChange = (event) => {
    setNewShortTermGoal(event.currentTarget.value);
  };

  const handleAddShortTermGoal = () => {
    if (newShortTermGoal.trim() !== '') {
      setShortTermGoals([...shortTermGoals, newShortTermGoal]);
      setNewShortTermGoal('');
    }
  };

  const handleRemoveShortTermGoal = (index) => {
    const updatedGoals = [...shortTermGoals];
    updatedGoals.splice(index, 1);
    setShortTermGoals(updatedGoals);
  };

  const ShortTermGoalsForm = () => {
    return (
      <Container size="sm">
        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <h2>Short term Goals</h2>
          <form onSubmit={handleSubmit}>
            {shortTermGoals.map((goal, index) => (
              <div key={index}>
                <TextInput
                  label={`Short Term Goal ${index + 1}`}
                  value={goal}
                  readOnly
                  rightSection={
                    <Button
                      onClick={() => handleRemoveShortTermGoal(index)}
                      variant="link"
                      color="red"
                      size="xs"
                    >
                      Del
                    </Button>
                  }
                />
              </div>
            ))}
  
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextInput
      label="New Short Term Goal"
      value={newShortTermGoal}
      onChange={handleNewShortTermGoalChange}
    />
    <div style={{ marginLeft: '16px' ,marginTop: '25px'}}>
      <Button
        onClick={handleAddShortTermGoal}
        variant="outline"
        color="dark"
        size="sm"
      >
        +
      </Button>
    </div>
  </div>
            <Space h="lg" />
            <Button type="submit" variant="filled">
              Save
            </Button>
          </form>
        </Paper>
      </Container>
    );
  };


  const MediumTermGoalsForm = () => {
    const [mediumTermGoals, setMediumTermGoals] = useState([]);
    const [newMediumTermGoal, setNewMediumTermGoal] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the goals (e.g., send them to the server)
      console.log(mediumTermGoals);
    };
  
    const handleNewMediumTermGoalChange = (event) => {
      setNewMediumTermGoal(event.currentTarget.value);
    };
  
    const handleAddMediumTermGoal = () => {
      if (newMediumTermGoal.trim() !== '') {
        setMediumTermGoals([...mediumTermGoals, newMediumTermGoal]);
        setNewMediumTermGoal('');
      }
    };
  
    const handleRemoveMediumTermGoal = (index) => {
      const updatedGoals = [...mediumTermGoals];
      updatedGoals.splice(index, 1);
      setMediumTermGoals(updatedGoals);
    };
  
    return (
      <Container size="sm">
        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <h2>Medium Term Goals</h2>
          <form onSubmit={handleSubmit}>
            {mediumTermGoals.map((goal, index) => (
              <div key={index}>
                <TextInput
                  label={`Medium Term Goal ${index + 1}`}
                  value={goal}
                  readOnly
                  rightSection={
                    <Button
                      onClick={() => handleRemoveMediumTermGoal(index)}
                      variant="link"
                      color="red"
                      size="xs"
                    >
                      Del
                    </Button>
                  }
                />
              </div>
            ))}
  
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextInput
                label="New Medium Term Goal"
                value={newMediumTermGoal}
                onChange={handleNewMediumTermGoalChange}
              />
              <div style={{ marginLeft: '16px' ,marginTop: '25px'}}>
                <Button
                  onClick={handleAddMediumTermGoal}
                  variant="outline"
                  color="dark"
                  size="sm"
                >
                  +
                </Button>
              </div>
            </div>
  
            <Space h="lg" />
            <Button type="submit" variant="filled">
              Save
            </Button>
          </form>
        </Paper>
      </Container>
    );
  };
 

  const LongTermGoalsForm = () => {
    const [longTermGoals, setLongTermGoals] = useState([]);
    const [newLongTermGoal, setNewLongTermGoal] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the goals (e.g., send them to the server)
      console.log(longTermGoals);
    };
  
    const handleNewLongTermGoalChange = (event) => {
      setNewMediumTermGoal(event.currentTarget.value);
    };
  
    const handleAddLongTermGoal = () => {
      if (newLongTermGoal.trim() !== '') {
        setLongTermGoals([...longTermGoals, newLongTermGoal]);
        setNewLongTermGoal('');
      }
    };
  
    const handleRemoveLongTermGoal = (index) => {
      const updatedGoals = [...longTermGoals];
      updatedGoals.splice(index, 1);
      setLongTermGoals(updatedGoals);
    };
  
    return (
      <Container size="sm">
        <Paper shadow="sm" radius="lg" p="lg" withBorder>
          <h2>Long Term Goals</h2>
          <form onSubmit={handleSubmit}>
            {longTermGoals.map((goal, index) => (
              <div key={index}>
                <TextInput
                  label={`Long Term Goal ${index + 1}`}
                  value={goal}
                  readOnly
                  rightSection={
                    <Button
                      onClick={() => handleRemoveLongTermGoal(index)}
                      variant="link"
                      color="red"
                      size="xs"
                    >
                      Del
                    </Button>
                  }
                />
              </div>
            ))}
  
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextInput
                label="New Long Term Goal"
                value={newLongTermGoal}
                onChange={handleNewLongTermGoalChange}
              />
              <div style={{ marginLeft: '16px' ,marginTop: '25px'}}>
                <Button
                  onClick={handleAddLongTermGoal}
                  variant="outline"
                  color="dark"
                  size="sm"
                >
                  +
                </Button>
              </div>
            </div>
  
            <Space h="lg" />
            <Button type="submit" variant="filled">
              Save
            </Button>
          </form>
        </Paper>
      </Container>
    );
  };

  return (
    <Container size="sm">
      <Paper shadow="sm" padding="lg">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem',marginTop: '1rem' }}>
          <Button
            variant="outline"
            color="gray"
            onClick={() => handleFormToggle('shortTerm')}
            disabled={activeForm === 'shortTerm'}
          >
            Short Term Goals
          </Button>
          <Button
            variant="outline"
            color="gray"
            onClick={() => handleFormToggle('mediumTerm')}
            disabled={activeForm === 'mediumTerm'}
          >
            Medium Term Goals
          </Button>
          <Button
            variant="outline"
            color="gray"
            onClick={() => handleFormToggle('longTerm')}
            disabled={activeForm === 'longTerm'}
          >
            Long Term Goals
          </Button>
        </div>
        <div style={{ marginTop: '1rem' }}>{renderForm()}</div>
      </Paper>
    </Container>
  );
  
};

export default GoalsPage;
