import { createStyles, Text, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    outline: "1px solid",
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.dark,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.dark,
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.colorScheme === "dark" ? theme.white : theme.dark,
    fontSize: rem(32),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    fontSize: theme.fontSizes.sm,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(2)} solid`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

export default function StatsGroup() {
  const data = [
    {
      title: "Expenses",
      description: "Rupees spent since start of month",
      stats: "300",
    },
    {
      title: "Income",
      description: "Rupees received since start of month",
      stats: "20,000",
    },
    {
      title: "Savings",
      description: "Total savings in account",
      stats: "140,000",
    },
  ];
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}
