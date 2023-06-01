'use client'


import {Box, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import Header from "@/widgets/header/ui";
import ListItem from "@/shared/ui/ListItem";

export default function Home() {
    return (
        <Box  bg={'bg.200'} h={'full'} w={'full'} borderRadius={'lg'} overflow={'hidden'} overflowY={'auto'}>
            <Header>
                <Box mb={2}>
                    <Heading as={'h1'}>
                        Welcome
                    </Heading>
                    <SimpleGrid columns={[1,2,3,4]} gap={3} mt={4} spacing={10}>
                        <ListItem
                            image={'/liked.png'}
                            name={'Liked songs'}
                            href={'liked'}
                        />
                    </SimpleGrid>
                </Box>
            </Header>
            <Box mt={2} mb={7} px={6}>
                <Flex justify={'space-between'} align={'center'} mb={1}>
                    <Heading as={'h2'} fontSize={'2xl'} fontWeight={'semibold'}>
                        Newest songs
                    </Heading>
                </Flex>
                <Box>
                    List of Songs
                </Box>
            </Box>

        </Box>
    )
}
