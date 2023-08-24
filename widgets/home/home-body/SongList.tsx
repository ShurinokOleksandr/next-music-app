'use client'
import {Box, Flex, Heading} from "@chakra-ui/react";
import {Song} from "@/types";
import SongList from "@/entities/song-list/SongList";

interface SongListProps {
    songs: Song[]
}
const HomeBody = ({songs}:SongListProps) => {
    return (
        <Box mt={2} mb={7} px={6} >
            <Flex justify={'space-between'} align={'center'} mb={1}>
                <Heading as={'h2'} fontSize={'2xl'} fontWeight={'semibold'}>
                    Newest songs
                </Heading>
            </Flex>
           <SongList songs={songs}/>
        </Box>
    );
};

export default HomeBody;
