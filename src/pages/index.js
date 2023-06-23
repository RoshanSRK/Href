import StatsGroup from "@/components/dashboard/StatsGroup";
import { Container, SimpleGrid, Title, Alert } from "@mantine/core";
import HorizontalBarChart from "@/components/dashboard/graphs/BarChart";
import PieChart from "@/components/dashboard/graphs/PieChart";
import LineChart from "@/components/dashboard/graphs/LineChart";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { IconAlertCircle } from "@tabler/icons-react";
export default function Home() {
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

      <Title mt={50}>Goals</Title>
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

      <Container h={300}>
        {" "}
        <HorizontalBarChart labelsArray={["ab", "df"]} dataArray={[1, 2]} />
      </Container>

      <Title mt={50}>Expenses</Title>
      <Container size={500}>
        <PieChart
          title="Expenses by categories"
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

      <Title mt={50}>Recommendations</Title>
      <Alert icon={<IconAlertCircle size="1rem" />} title="Bummer!" color="red">
        You are spending too much money
      </Alert>
    </Container>
  );
}
