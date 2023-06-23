import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

// interface CardProps {
//   image: string;
//   title: string;
//   category: string;
// }

function Card({ image, title, category }) {
    const { classes } = useStyles();

    return (
        <>
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                sx={{ backgroundImage: `url(${image})`, height:"300px"}}
                className={classes.card}

            >
                <div>
                    <Text className={classes.category} size="xs">
                        {category}
                    </Text>
                    <Title order={3} className={classes.title}>
                        {title}
                    </Title>
                </div>
            </Paper>
        </>
    );
}

const data = [
    {
        image:
            'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'You should always keep track of your investments.',
        category: 'Tips',
    },
    {
        image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Keep yourself updated on market performance so as to take the right decisions.',
        category: 'Tips',
    },
    {
        image:
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'It is important to seek maximum information and professional advice before investing.',
        category: 'Tips',
    },
    {
        image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Never let your expenses exceed your income.',
        category: 'Tips',
    },
    
];

export default function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <>
            <Text fz="xl" fw={700} style={{ fontSize: "40px" }}>Some financial tips</Text>

            <Carousel
                slideSize="50%"
                breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
                slideGap="xl"
                align="start"
                slidesToScroll={mobile ? 1 : 2}
            >
                {slides}
            </Carousel>
        </>
    );
}