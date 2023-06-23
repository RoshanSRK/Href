import { Text, Progress, Card } from "@mantine/core";

export function ProgressCard({
  label = "test",
  description = "Rs 5.431 / 10.000",
  value = 26,
}) {
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {label}
      </Text>
      <Text fz="lg" fw={500}>
        {description}
      </Text>
      <Progress value={value} mt="md" size="lg" radius="xl" />
    </Card>
  );
}
