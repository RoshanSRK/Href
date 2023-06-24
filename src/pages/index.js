import StatsGroup from "@/components/dashboard/StatsGroup";
import { Container, SimpleGrid, Title, Alert } from "@mantine/core";
import HorizontalBarChart from "@/components/dashboard/graphs/BarChart";
import PieChart from "@/components/dashboard/graphs/PieChart";
import LineChart from "@/components/dashboard/graphs/LineChart";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { IconAlertCircle } from "@tabler/icons-react";
export default function Home() {
  const titleMarginTop = 50;
  const titleMarginBottom = 10;
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const expensesCategories = [
    "Housing",
    "Transportation",
    "Food",
    "Entertainment",
    "Health",
    "Personal Care",
    "Other expenses",
  ];
  return (
    <Container>
      <StatsGroup />

      <Title mb={titleMarginBottom} mt={titleMarginTop}>
        Goals
      </Title>
      <SimpleGrid cols={3}>
        <ProgressCard label="Monthly savings goal" />
        <ProgressCard
          label="Pay off debt"
          description="Rs 5000 / 100.000"
          value={10}
        />
        <ProgressCard
          label="Invest in college education"
          description="Rs 1.1 / 5M"
          value={33}
        />
      </SimpleGrid>

      <Title mb={titleMarginBottom} mt={titleMarginTop}>
        Revenues
      </Title>
      <Container>
        {" "}
        <HorizontalBarChart
          titleName="Revenue since start of month"
          labelsArray={["Salary", "Bonus", "Gifts"]}
          dataArray={[20000, 1000, 500]}
        />
      </Container>

      <Title mb={titleMarginBottom} mt={titleMarginTop}>
        Expenses
      </Title>
      <Container size={550}>
        <PieChart
          titleName="Expenses by categories"
          labelsArray={expensesCategories}
          dataArray={expensesCategories.map((e) => Math.random() * 1000)}
        />
      </Container>
      <Title mt={50}>Spending pattern</Title>

      <LineChart
        labelsArray={allMonths}
        dataArray={allMonths.map((e) => Math.random() * 1000)}
        title="Total expenses since start of year"
      />

      <Title mb={titleMarginBottom} mt={titleMarginTop}>
        Recommendations
      </Title>
      <Alert icon={<IconAlertCircle size="1rem" />} title="Bummer!" color="red">
        You have spent Rs 1000 more on entertainment compared to last month.
      </Alert>
    </Container>
  );
}
