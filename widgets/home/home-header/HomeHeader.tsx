'use client'
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import ListItem from "@/shared/ui/ListItem";
import Header from "@/widgets/header/ui";

const HomeHeader = () => {
    return (
        <Header>
            <Box mb={2}>
                <Heading as={'h1'}>
                    Welcome
                </Heading>
                <SimpleGrid columns={[1,2,3,4]} gap={3} mt={4} spacing={10}>
                    <ListItem
                        image={'/liked.png'}
                        name={'Liked songs'}
                        href={'/liked'}
                    />
                </SimpleGrid>
            </Box>
        </Header>
    );
};

export default HomeHeader;
