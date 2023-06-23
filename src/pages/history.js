import { Timeline, Text, Container, Flex, Title } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";

export default function History() {
  const expensesCategories = [
    "Housing",
    "Transportation",
    "Food",
    "Entertainment",
    "Health",
    "Personal Care",
    "Other expenses",
  ];
  const gainCategories = ["Salary", "Gift"];
  const history = [
    {
      category:
        expensesCategories[
          parseInt(Math.random() * expensesCategories.length, 10)
        ],
      amount: -500,
      date: "Today",
    },
    {
      category:
        expensesCategories[
          parseInt(Math.random() * expensesCategories.length, 10)
        ],
      amount: -5000,
      date: "Yesterday",
    },
    {
      category:
        gainCategories[parseInt(Math.random() * gainCategories.length, 10)],
      amount: 100,
      date: "05/01/23",
    },
    {
      category:
        expensesCategories[
          parseInt(Math.random() * expensesCategories.length, 10)
        ],
      amount: -100,
      date: "05/01/23",
    },
    {
      category:
        expensesCategories[
          parseInt(Math.random() * expensesCategories.length, 10)
        ],
      amount: -100,
      date: "05/01/23",
    },
    {
      category:
        expensesCategories[
          parseInt(Math.random() * expensesCategories.length, 10)
        ],
      amount: -100,
      date: "05/01/23",
    },
    {
      category:
        expensesCategories[
          parseInt(Math.random() * expensesCategories.length, 10)
        ],
      amount: -100,
      date: "01/01/23",
    },
  ];

  const items = history.map((el, i) => {
    const msg = `You've ${el.amount > 0 ? "earned" : "spent"} Rs ${Math.abs(
      el.amount
    )} ${el.amount > 0 ? "from" : "on"} ${el.category}`;
    return (
      <Timeline.Item
        key={`timeline-item${i}`}
        bullet={<IconGitBranch size={20} />}
        title={el.category}
      >
        <Text color="dimmed" size="sm">
          {msg}
        </Text>
        <Text size="xs" mt={4}>
          {el.date}
        </Text>
      </Timeline.Item>
    );
  });

  return (
    <Container>
      <Title mb={20}>History</Title>
      <Flex justify={"center"}>
        <Timeline
          color="yellow"
          active={history.length - 2}
          reverseActive
          bulletSize={30}
          lineWidth={2}
        >
          {items}
        </Timeline>
      </Flex>
    </Container>
  );
}
